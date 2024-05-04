// CLEAR BUTTON JS CODE
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function() {
  const textArea = document.getElementById("text-area");
  textArea.value = "";
});


// OPEN FILE BUTTON JS CODE
const openFileButton = document.getElementById("open-file-button");
const fileInput = document.getElementById("file-input");

openFileButton.addEventListener("click", function() {
  fileInput.click();
});

fileInput.addEventListener("change", function() {
  const reader = new FileReader();

  reader.onload = function(e) {
    const textArea = document.getElementById("text-area");
    textArea.value = e.target.result;
  };

  reader.readAsText(fileInput.files[0]);
});
