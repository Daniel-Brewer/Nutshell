const FormManager = require("./RegistrationForm")
const DataManager = require("./dataManager")
const LoginManager = require("./login.js")
// Render the journal entry form
document.querySelector("#registrationForm").innerHTML = FormManager.renderRegistrationForm()
// document.querySelector("#loginForm").innerHTML = LoginManager.renderLoginForm()






// Add an event listener for the save button
document.querySelector("#registerButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    const activeUser = {
        title: document.querySelector("#username").value,
        content: document.querySelector("#email").value,
    }
    // check to see if user already exists
    // let foundUser = users.find(function (element) {
    //     return element.name === users.name
    //     if (foundUser = true) {
    //         //    go to login page   // 
    //         console.log("user exists in database", foundUser)
    //     }
    //     else {
            // if user is unique POST to API
            DataManager.saveUser(activeUser)
                .then(() => {
                    // Clear the form fields
                    FormManager.clearForm()
                })
        })
    // })})