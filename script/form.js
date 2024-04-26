function handleSelection() {
  var selectElement = document.getElementById("selectOption");
  var selectedValue = selectElement.value;

  if (selectedValue === "jss") {
    document.getElementById("content").style.display = "none";
  } else {
    document.getElementById("content").style.display = "block";
  }
}