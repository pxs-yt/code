// SIDEBAR JS CODE

const sidebar = document.querySelector(".sidebar");
const toggleButton = document.createElement("button");

toggleButton.textContent = "Hide Sidebar";
toggleButton.classList.add("sidebar-toggle");

sidebar.appendChild(toggleButton);

toggleButton.addEventListener("click", function() {
  sidebar.classList.toggle("hidden");
  if (sidebar.classList.contains("hidden")) {
    toggleButton.textContent = "Show Sidebar";
  } else {
    toggleButton.textContent = "Hide Sidebar";
  }
});




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

// TXT FILE SAVING FUNCTION JS CODE
const saveButton = document.getElementById("save-button");
const saveFileInput = document.getElementById("save-file-input");

saveButton.addEventListener("click", function() {
  const textArea = document.getElementById("text-area");
  const text = textArea.value;

  const blob = new Blob([text], { type: "text/plain" });

  saveFileInput.click(); // Trigger "Save As" dialog

  const url = URL.createObjectURL(blob);
  saveFileInput.href = url;

  // Reset the URL after some time to avoid memory leaks (optional)
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
