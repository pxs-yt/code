const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function() {
  const textArea = document.getElementById("text-area");
  textArea.value = "";
});
