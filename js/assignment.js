var selectedRow = null



function onFormSubmit() {
	console.log("ssas")
	// if(validate()) {
     var formData = readFormData();
     insertNewRecord(formData);
    // if (selectedRow == null)
    //     insertNewRecord(formData);
    // else
     //	updateRecord(formData)
    // resetForm();
    // }
}

function readFormData() {
	var formData = {};
	formData["FullName"] = document.getElementById("FullName").value;
	formData["StudentId"] = document.getElementById("StudentId").value;
	formData["Class"] = document.getElementById("Class").value;
	formData["RollNo"] = document.getElementById("RollNo").value;
	return formData;
}

function insertNewRecord(data) {
	var table = document.getElementById("StudentList").getElementsByTagName('tbody')[0];
	console.log(table);
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.FullName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.StudentId;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.Class;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.RollNo;
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
	                   <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
	document.getElementById("FullName").value ="";
	document.getElementById("StudentId").value ="";
	document.getElementById("Class").value ="";
	document.getElementById("RollNo").value ="";
	selectedRow = null;
}

function onEdit(td) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById("FullName").value = selectedRow.cells[0].innerHTML;
	document.getElementById("StudentId").value = selectedRow.cells[0].innerHTML;
	document.getElementById("Class").value = selectedRow.cells[0].innerHTML;
	document.getElementById("RollNo").value = selectedRow.cells[0].innerHTML;
}

// function updateRecord(formData) {
// 	selectedRow.cells[0].innerHTML = formData.FullName;
// 	selectedRow.cells[1].innerHTML = formData.StudentId;
// 	selectedRow.cells[2].innerHTML = formData.Class;
// 	selectedRow.cells[3].innerHTML = formData.RollNo;
// }

function onDelete(td) {
	if (confirm('Are you sure to detele this record ?')) {
	    row = td.parentElement.parentElement;
	    document.getElementById("StudentList").deleteRow(row.rowIndex);
	    resetForm();
	    }
	}

	function validate() {
		isValid = true;
		if (document.getElementById("FullName").value == "") {
            isValid = false;
            document.getElementById("FullNameValidationError").classList.remove("hide");
		} else {
			isValid = true;
			if (!document.getElementById("FullNameValidationError").classList.contains("hide"))
				document.getElementById("FullNameValidationError").classList.add("hide");
		}
	}