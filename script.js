  // Student data array
        var array = [
            { id: 1, name: "Alice Johnson", age: 16, class: "10A" },
            { id: 2, name: "Brain Smith", age: 17, class: "11B" },
            { id: 3, name: "Maxwell James", age: 18, class: "12C" },
            { id: 4, name: "Richard Lemon", age: 19, class: "12D" },
            { id: 5, name: "Thomas Saxon", age: 20, class: "13E" },
            { id: 6, name: "Samuel Morse", age: 21, class: "14F" },
            { id: 7, name: "Henry Chris", age: 22, class: "15G" },
            { id: 8, name: "Godwin Joseph", age: 23, class: "16H" },
            { id: 9, name: "Isaac Thompson", age: 24, class: "17I" },
            { id: 10, name: "Emmanuel Ishamel", age: 25, class: "18J" }
        ];
        
        var selectedRow = null;
        
        // Display the table with student data
        function showtable(curarray) {
            const table = document.getElementById("mytable");
            table.innerHTML = `
                <tr class="bg-primary text-white fw-bold">
                    <td>ID</td>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>CLASS</td>
                    <td>ACTIONS</td>
                </tr>
            `;
            
            if (curarray.length === 0) {
                document.getElementById("error").innerHTML = `<span class="text-danger">No Student Found!</span>`;
                table.style.display = "none";
            } else {
                document.getElementById("error").innerHTML = "";
                for (var i = 0; i < curarray.length; i++) {
                    table.innerHTML += `
                        <tr>
                            <td>${curarray[i].id}</td>
                            <td>${curarray[i].name}</td>
                            <td>${curarray[i].age}</td>
                            <td>${curarray[i].class}</td>
                            <td class="action-buttons">
                                <button class="edit-btn" onclick="onEdit(${curarray[i].id})">Edit</button>
                                <button class="delete-btn" onclick="onDelete(${curarray[i].id})">Delete</button>
                            </td>
                        </tr>
                    `;
                }
                table.style.display = "table";
            }
        }
        
        // Initial table display
        showtable(array);
        
        // Search functionality
        document.getElementById("search").addEventListener("keyup", function() {
            var search = this.value.toLowerCase().trim();
            if (search === "") {
                showtable(array);
                return;
            }
            var newarray = array.filter(function(val) {
                return (
                    val.id.toString().includes(search) ||
                    val.name.toLowerCase().includes(search) ||
                    val.age.toString().includes(search) ||
                    val.class.toLowerCase().includes(search)
                );
            });
            showtable(newarray);
        });
        
        // Modal functions
        function openModal() {
            document.getElementById("studentModal").style.display = "block";
            document.getElementById("modalTitle").innerText = "Add New Student";
            resetForm();
            selectedRow = null;
        }
        
        function closeModal() {
            document.getElementById("studentModal").style.display = "none";
        }
        
        // CRUD functions
        function onFormSubmit() {
            if (validate()) {
                var formData = readFormData();
                if (selectedRow == null) {
                    insertNewRecord(formData);
                } else {
                    updateRecord(formData);
                }
                closeModal();
            }
        }
        
        function readFormData() {
            var formData = {};
            formData["id"] = document.getElementById("id").value;
            formData["name"] = document.getElementById("name").value;
            formData["age"] = document.getElementById("age").value;
            formData["class"] = document.getElementById("class").value;
            return formData;
        }
        
        function insertNewRecord(data) {
            // Convert id to number
            data.id = parseInt(data.id);
            data.age = parseInt(data.age);
            
            // Add to array
            array.push(data);
            
            // Refresh table
            showtable(array);
        }
        
        function resetForm() {
            document.getElementById("id").value = "";
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("class").value = "";
            selectedRow = null;
        }
        
        function onEdit(id) {
            // Find student by id
            selectedRow = array.find(student => student.id === id);
            
            // Fill form with student data
            document.getElementById("id").value = selectedRow.id;
            document.getElementById("name").value = selectedRow.name;
            document.getElementById("age").value = selectedRow.age;
            document.getElementById("class").value = selectedRow.class;
            
            // Open modal
            document.getElementById("modalTitle").innerText = "Edit Student";
            document.getElementById("studentModal").style.display = "block";
        }
        
        function updateRecord(formData) {
            // Update the array
            const index = array.findIndex(student => student.id === selectedRow.id);
            if (index !== -1) {
                array[index] = {
                    id: parseInt(formData.id),
                    name: formData.name,
                    age: parseInt(formData.age),
                    class: formData.class
                };
            }
            
            // Refresh table
            showtable(array);
        }
        
        function onDelete(id) {
            if (confirm('Are you sure to delete this student record?')) {
                // Remove from array
                array = array.filter(student => student.id !== id);
                
                // Refresh table
                showtable(array);
            }
        }
        
        function validate() {
            isValid = true;
            if (document.getElementById("id").value == "") {
                isValid = false;
                document.getElementById("fullNameValidationError").classList.remove("hide");
            } else {
                isValid = true;
                if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
                    document.getElementById("fullNameValidationError").classList.add("hide");
            }
            
            // Check if ID already exists (only for new records)
            if (selectedRow === null) {
                const id = parseInt(document.getElementById("id").value);
                if (array.some(student => student.id === id)) {
                    alert("This ID already exists. Please use a different ID.");
                    isValid = false;
                }
            }
            
            return isValid;
        }