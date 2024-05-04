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

// TEXT SHARING FUNCTION JS CODE
const shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", function() {
  const textArea = document.getElementById("text-area");
  const text = textArea.value;

  // Check for clipboard write support (newer browsers)
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Text copied to clipboard! You can now share it from your device's sharing menu.");
      })
      .catch(err => {
        console.error("Failed to copy text to clipboard:", err);
        // Fallback if writeText fails
        fallbackShare(text);
      });
  } else {
    fallbackShare(text);
  }
});

function fallbackShare(text) {
  const message = "Share this text:\n" + text;
  // This opens the native sharing menu with pre-filled message
  if (navigator.share) {
    navigator.share({
      title: "Share Text",
      text: message
    });
  } else {
    alert("Text sharing is not supported on your device. Please copy the text manually and share it.");
  }
}

