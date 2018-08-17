// verify if logged in user is unique
const FormManager = require("./Forms")
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
        console.log("result in Login.js at 14", result);
        loginVerification(result);
    });
    // verifyUser(result);
    function loginVerification(users) {
        let currentUser = users.find(user => {
            console.log("users at 18", users);
            console.log("user at 19", user);
            console.log("user.username", user.username)
            return user.username === newUser.username && user.email === newUser.email;
        });
        
        if (currentUser) {
            // console.log("found user", currentUser);
            alert("yay you are logged in now!");
            sessionStorage.setItem("user", JSON.stringify(currentUser));
            //take them to a new view, load landing page
        }
        else {
            // console.log("user at 33", currentUser);
            alert("you are not in our db, please register");
            FormManager.clearForm()
            FormManager.renderRegistrationForm()

            // APIManager.saveUser(currentUser)
            // .then(() => {
            //     // Clear the form fields
            //     FormManager.clearForm()
            // })
        }
    };
}

// }
module.exports = verifyActiveUser