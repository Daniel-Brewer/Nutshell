const FormManager = require("./Forms")
const APIManager = require("./APIManager")
const Storage = require("./Storage")
const verifyActiveUser = require("./Login")
const registeredUser = require("./Register")
const Landing = require("./Landing")

// Render the login form
document.querySelector("#loginForm").innerHTML = FormManager.renderLoginForm()

// Add an event listener for the login button
document.querySelector("#loginButton").addEventListener("click", () => {
    console.log(username, email)
    // Get form field values
    // Create object from them
    const userToBeAdded = {
        "username": document.querySelector("#username").value,
        "email": document.querySelector("#email").value,
    }
    // check to see if user already exists
    verifyActiveUser(userToBeAdded)
})
