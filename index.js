var userName = "";
var email = "";
function showSummary() {
  userName = document.getElementById("name").value;
  email = document.getElementById("email").value;

  if (userName && email) {
    document.getElementById("container").classList.add("active");

    $("#form-container").hide();
  } else {
    alert("Both name and email is mandatory");
  }
}

var options = [];

$(".option1").click(function () {
  var id = this.id;
  $("#" + id).css("background-color", "white");
  options.push(
    $("#" + id)
      .text()
      .replaceAll("\n", "")
      .trim()
  );
});

$(".option2").click(function () {
  var id = this.id;
  $("#" + id).css("background-color", "white");
  options.push(
    $("#" + id)
      .text()
      .replaceAll("\n", "")
      .trim()
  );
});

$(".option3").click(function () {
  var id = this.id;
  $("#" + id).css("background-color", "white");
  options.push(
    $("#" + id)
      .text()
      .replaceAll("\n", "")
      .trim()
  );
});

function showSummaryDiv() {
  document.getElementById("container1").classList.add("active");
  $("#container").hide();
  var optionSet = new Set(options);
  $("#nameValue").text(userName);
  $("#emailValue").text(email);
  const optionArr = Array.from(optionSet);
  optionArr.map((element) => {
    document.getElementById(
      "topicValue"
    ).innerHTML += `<div>${element}</div> <br/>`;
  });
}
