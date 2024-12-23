//variables and dom elements
const languageSelect = document.getElementById("language");
const submitButton = document.getElementById("submitBtn");
const messageParagraph = document.getElementById("message");

//array of languages (for potential future use)
const language = ["JavaScript", "Python", "Java", "C++", "Ruby"];

//event listner
submitButton.addEventListener("click", function () {
    //console.log("Button clicked");

    //get selected language

    const selectedLanguage = languageSelect.value;
    console.log("selectedLanguage :", selectedLanguage);
    //check if a selection has been made
    if(!selectedLanguage){
        messageParagraph.textContent = "Please make a selection first";
        console.log("xx:message displayed:", messageParagraph.textContent);
    }

    //message to display
    let message = "";

    //switch statement to handle the language choice
    console.log("00:message displayed:", messageParagraph.textContent);
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
    //console.log("message displayed:", message);
    console.log("01:message displayed:", messageParagraph.textContent);
});

