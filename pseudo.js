// START PROGRAM 
// CREATE an array called array to store student data
// id, name, age, class
// DECLARE students array of student
// Global Variables
// DELCLARE selectedStudent Student OR NULL
// Main Functions
// FUNCTION initialize
// load sample data, e.g Alice Johnson
// displayTable(students)
//END FUNCTION
//UI Functions
// FUNCTION displayTable studentList 
// CLEAR table
// IF studentList is empty then
// SHOW "No students found" message
// HIDE table
// ELSE 
// SHOW table header
// FOR EACH student IN studentList
// ADD row with student data AND action buttons
// END FOR
// SHOW table
// END IF 
// END FUNCTION 
// Modal Operations
// FUNCTION openAddModal()
// SET modal title to "Add Student"
// CLEAR form
// SET selectedStudent to NULL
// SHOW modal
// END FUNCTION 
// FUNCTION openEditModal(studentId)
// SET modal title to "Add Student"
// CLEAR form
// SET selectedStudent to NULL 
// SHOW modal
// END FUNCTION
// FUNCTION openEditModal(studentId)
// SET selectedStudent = FIND student WITH ID = studentId
// IF selectedStudent EXISTS THEN
// SET modal title to "Edit Student"
// FILL form WITH selectedStudent data
// SHOW modal
// END IF 
// END FUNCTION
// CRUD Operations
// FUNCTION handleFormSubmit()
// IF validateForm() THEN
// studentData = getFormData()
// IF selectedStudent IS NULL THEN 
// addStudent(studentData)
// ELSE 
// updateStudent(studentData)
// END IF 
// closeModal()
// END IF 
// END FUNCTION
// FUNCTION getFormData()
// RETURN id: CONVERT idInput to INTEGER, name: nameInput, age: CONVERT ageInput TO INTEGER,
// class: classInput
// END FUNCTION
// FUNCTION addStudent(newStudent)
// IF students CONTAINS Student WITH newStudent.id THEN
// SHOW "ID already exists" error
// RETURN 
// END IF
// ADD newStudent TO students 
// displayTable(students)
// END FUNCTION
// FUNCTION updateStudent(updatedData)
// FIND INDEX OF selectedStudent IN students
// IF FOUND THEN 
// UPDATE student AT INDEX WITH updatedData
// displayTable(students)
// END IF 
// END FUNCTION
// FUNCTION deleteStudent(studentId)
// IF CONFIRM("Delete this student?") THEN
// REMOVE student WITH ID = studentId FROM students
// displayTable(students)
// END IF 
// END FUNCTION
// Validation
// FUNCTION validateForm() RETURNS BOOLEAN
// isValid = TRUE
// Validate ID
// IF idInput ID EMPTY THEN 
// SHOW "ID required" error
// isValid = FALSE
// ELSE IF NOT IS_NUMBER(idInput) THEN 
// SHOW "ID must be number" error
// isValid = FALSE
// ELSE IF ADDING NEW AND ID EXISTS THEN 
// SHOW "ID exists" error
// isValid = FALSE
// END IF
// Validate Name
// IF nameInput IS EMPTY THEN 
// SHOW "Name required" error
// isValid = FALSE
// END IF
// Validate Age
// IF ageInput IS EMPTY THEN
// SHOW "Age required" error
// isValid = FALSE
// ELSE IF NOT IS_NUMBER(ageInput) THEN
// SHOW "Age must be a number" error
// isValid = FALSE
// ELSE IF ageInput less or equal to 0 THEN 
// SHOW "Age must be positive" error
// isValid = FALSE
// END IF
// Validate Class
// IF classInput IS EMPTY THEN 
// SHOW "Class required" error
// isValid = FALSE
// END IF
// RETURN isValid 
// END FUNCTION 
// Event Handlers
// ON PAGE LOAD:
// initialize()
// ON SEARCH INPUT CHANGE:
// searchTerm = GET search value LOWERCASE
// IF searchTerm IS EMPTY THEN 
// displayTable(students)
// ELSE
// filtered = FILTER students WHERE
// id CONTAINS searchTerm OR 
// name LOWERCASE CONTAINS searchTerm OR 
// age CONTAINS searchTerm OR 
// class LOWERCASE CONTAINS searchTerm 
// displayTable(filtered)
// END IF 
// ON ADD BUTTON CLICK:
// openAddModal()
// ON EDIT BUTTON CLICK FOR STUDENT:
// openEditModal(studentId)
// ON DELETE BUTTON CLICK FOR STUDENT:
// deleteStudent(studentId)
// ON FORM SUBMIT:
// handleFormSubmit()
// ON MODAL CLOSE:
// closeModal()
// END PROGRAM