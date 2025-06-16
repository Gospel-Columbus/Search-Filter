  // using array to store student data.
  var array = [
            { id: 1,
              name: "Alice Johnson",
              age: 16, 
              class: "10A" },

            { id: 2,
              name: "Brain Smith",
              age: 17,
              class: "11B" },


            { id: 3,
              name: "Maxwell James",
              age: 18,
              class: "12C" },

        
            { id: 4,
              name: "Richard Lemon",
              age: 19,
              class: "12D" },


            { id: 5,
              name: "Thomas Saxon",
              age: 20,
              class: "13E" },


            { id: 6,
              name: "Samuel Morse",
              age: 21, 
              class: "14F" },


            { id: 7,
              name: "Henry Chris", 
              age: 22,
              class: "15G" },


            { id: 8,
              name: "Godwin Joseph",
              age: 23,
              class: "16H" },


            { id: 9,
              name: "Isaac Thompson",
              age: 24, 
              class: "17I" },

            { id: 10,
              name: "Emmanuel Ishamel", 
              age: 25,
              class: "18J" }
        ];
        
        // using a function showtable with input curarray
        function showtable(curarray) {
          // clearing the table and inserting the table row
            const table = document.getElementById("mytable");
            table.innerHTML = `
                <tr class="bg-primary text-white fw-bold">
                    <td>ID</td>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>CLASS</td>
                </tr>
            `;
             // if curarray is not the required number show No Student Found.
            if (curarray.length === 0) {
                document.getElementById("error").innerHTML = `<span class="text-danger">No Student Found!</span>`;
                table.style.display = "none"; // Hide the table
                // else clear any error messages.
            } else {
                document.getElementById("error").innerHTML = "";
                // for each student in curarray, show the table.
                for (var i = 0; i < curarray.length; i++) {
                    table.innerHTML += `
                        <tr>
                            <td>${curarray[i].id}</td>
                            <td>${curarray[i].name}</td>
                            <td>${curarray[i].age}</td>
                            <td>${curarray[i].class}</td>
                        </tr>
                    `;
                }
                table.style.display = "table";
            }
        }

        // Initial table display
        showtable(array);

        // Search logic, setting up and event listener.
        document.getElementById("search").addEventListener("keyup", function () {
            var search = this.value.toLowerCase().trim();
          // if the search input is empty, show the table.
            if (search === "") {
                showtable(array);
                return;
            }
            // filter the function array using this conditions.
            var newarray = array.filter(function (val) {
                return (
                    val.id.toString().includes(search) ||
                    val.name.toLowerCase().includes(search) ||
                    val.age.toString().includes(search) ||
                    val.class.toLowerCase().includes(search)
                );
            });
            // calling the function showtable.
            showtable(newarray);
        });