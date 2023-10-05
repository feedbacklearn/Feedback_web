function navigateToFeedback() {
    location.href = 'feedback_questions.html';
}

function validateAndNavigate() {
    const userInfoForm = document.getElementById('userInfoForm');
    if (userInfoForm.checkValidity()) {
        navigateToFeedback();
    } else {
        alert('Please fill out all fields correctly before proceeding.');
    }
}

// Add an event listener to the file input
document.getElementById("fileInput").addEventListener("change", function () {
    // Get the selected file
    const selectedFile = this.files[0];

    // Display the selected file's name in the nearby element
    const selectedFileNameElement = document.getElementById("selectedFileName");
    if (selectedFile) {
        selectedFileNameElement.textContent = "Selected file: " + selectedFile.name;
    } else {
        selectedFileNameElement.textContent = ""; // Clear the text if no file is selected
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (feedbackForm.checkValidity()) {
                alert('Feedback submitted successfully!');
            } else {
                alert('Please answer all questions before submitting.');
            }
        });
    }

    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        const output = document.getElementById(input.id + 'Output');
        output.value = input.value;
        input.addEventListener('input', function() {
            output.value = input.value;
        });
    });
});
