
const RegistrationForm = require("./RegistrationForm")
const APIManager = require("./APIManager")
const storage = require("./Storage")
// When activeUser is invoked...
const verifyActiveUser = () => {
    // new user object is tested
    const newUser = {
        "username": document.querySelector("#username").value,
        "email": document.querySelector("#email").value
    }
    // get all users from the api
    APIManager.getAllUsers().then(result => {
        // console.log(result);
        loginVerification(result);
    });
    // verifyUser(result);
    function loginVerification(users) {
        let currentUser = users.find(user => {
            console.log("users", users)
            console.log("user", user)
            return user.username === username && user.email === email;
        });

        if (currentUser) {
            alert("yay you are logged in now!");
            sessionStorage.setItem("activeUser", JSON.stringify(currentUser));
            //take them to a new view, load landing page
        }
        else {
            alert("you are not in our db, please register");
            register();
        }
    }
    function register() {
        //values from the form when someone hits submit
        let username = document.getElementById("username");
        let email = document.getElementById("email");

        //get users from the database
        APIManager.getAllUsers().then(allUsers => {
            let registeringUser = {
                "username": username,
                "email": email
            }
            //loop over the users in the database and compare values from the form
            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].username === username || allUsers[i].email === email) {
                    alert("your username AND email must be unique. We found a duplicate in the database.")
                } else {
                    alert("woooo! you're logged in!")
                    //add them to db! and theeeeeennnn
                    APIManager.saveUser(registeringUser)
                        .then(userThatWasAdded => {
                            sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));
                        })
                    //change the view
                }
            }
        })
    }
}
module.exports = verifyActiveUser