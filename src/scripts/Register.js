/* function to register unique users */
const FormManager = require("./Forms")
const APIManager = require("./APIManager")
const storage = require("./Storage")
const verifiedActiveUser = require("./login")
// When registerUser is invoked...
const registeredUser = () => {
    // user to be registered 
    const userToBeRegistered = {
        "username": document.querySelector("#username").value,
        "email": document.querySelector("#email").value
    }
    function registerUser() {
        //values from the form when someone hits submit
        let username = document.getElementById("username");
        let email = document.getElementById("email");

        //get users from the database
        APIManager.getAllUsers().then(userToBeAdded => {
            let registeringUser = {
                "username": username,
                "email": email
            }
            //loop over the users in the database and compare values from the form
            for (let i = 0; i < userToBeAdded.length; i++) {
                if (userToBeAdded[i].username === username || userToBeAdded[i].email === email) {
                    alert("your username AND email must be unique. We found a duplicate in the database.")
                }
                else {
                    //add them to db! and theeeeeennnn
                    APIManager.saveUser(registeringUser)
                        .then(userThatWasAdded => {
                            sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));
                        })
                    alert("woooo! you're logged in!")
                    //change the view go to landing page
                }
            }
        })

    }}
    module.exports = registeredUser
