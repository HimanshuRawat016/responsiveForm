function showSummary() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name && email) {
    alert(`Name:${name} and email:${email}`);
    document.getElementById("container").classList.add("active");
    document.getElementById("form-container").classList.add("notActive");
    document.getElementById("form-container").classList.remove("active");
    document.getElementById("form-container").hidden();
  } else {
    alert("Both name and email is mandatory");
  }
}
