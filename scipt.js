//variables and dom elements
const languageSelect = document.getElementById("language");
const submitButton = document.getElementById("submitBtn");
const messageParagraph = document.getElementById("message");

//array of languages (for potential future use)
const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

//event listner
submitButton.addEventListener("click", function () {

    //get selected language

    const selectedLanguage = languageSelect.value;

    //message to display
    let message = "";

    //switch statement to handle the language choice

    switch (selectedLanguage) {
        case "javascript":
            message = "JavaScript is the language of the web 🚀";
            break;

        case "python":
            message = "Python is great for AI and data science 🐍";
            break;
        case "java":
            message = "Java powers enterprise applications worldwide ☕";
            break;
        case "c++":
            message = "C++ is perfect for high-performance applications 💻";
            break;
        case "ruby":
            message = "Ruby is known for web development with Rails 💎";
            break;
        default:
            message = "Please select a valid programming language.";

    }

//display the message in the paragraph
   messageParagraph.textContent = message;
});

