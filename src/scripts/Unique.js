
const RegistrationForm = require("./RegistrationForm")
const APIManager = require("./API/APIManager")
const storage = require("./Storage")
// When uniqueUser is invoked...
const uniqueUser = () => {
    // new user object is tested
    const newUser = {
        "userName": $("#username").val(),
        "email": $("#email").val(),
    }
    // get all users from the api
    APIManager.getAllUsers("user").then(array => {
        // make a new array with just all the user names in the array
        const existingUsernames = array.map((item) => {
            return item.userName
        })
        /* search through the array of usernames to see if any of them match with
        the user's user name input. If so, it will be returned, preventing it
        to be added to the API*/
        const existingUser = existingUsernames.find(user => {
            const userNameInput = $("#username").val()
            if (user === userNameInput) {
                return user
            }
        })
        /* Sends alert if user exists */
        if (existingUser) {
            alert("Already exists!")
        } else {
            // Stores new object in the API and Session Storage
            APIManager.createObject("user", newUser).then(user => {
                storage.saveData(newUser)
            })
        }
    })
} 
module.exports = uniqueUser