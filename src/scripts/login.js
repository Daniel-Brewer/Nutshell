/* login function */
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