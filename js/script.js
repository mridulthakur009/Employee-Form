
function employeeForm(){
    let firstname = document.forms["myForm"]["fname"].value;
  if (firstname == "" || firstname == null) {
    alert("Name must be filled out");
    return false;
  }
}