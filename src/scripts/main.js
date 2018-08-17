const FormManager = require("./RegistrationForm")
const APIManager = require("./APIManager")
const Storage = require("./Storage")
const verifyActiveUser = require("./Login")
const registeredUser = require("./Register")

// Render the registration form
document.querySelector("#registrationForm").innerHTML = FormManager.renderRegistrationForm()

// Add an event listener for the save button
document.querySelector("#registerButton").addEventListener("click", () => {
console.log(username, email)
    // Get form field values
    // Create object from them
    const userToBeAdded = {
        "username": document.querySelector("#username").value,
        "email": document.querySelector("#email").value,
    }
    // check to see if user already exists
    verifyActiveUser(userToBeAdded)
    console.log("user to be added on 21 in main", userToBeAdded)
        // if user is unique
        //  POST to API
        APIManager.saveUser(userToBeAdded)
            .then(() => {
                // Clear the form fields
                FormManager.clearForm()
            })
    })