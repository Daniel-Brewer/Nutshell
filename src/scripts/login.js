// verify if logged in user is unique
const FormManager = require("./Forms")
const APIManager = require("./APIManager")
const storage = require("./Storage")
// When verifyActiveUser is invoked...
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
            return user.username === newUser.username && user.email === newUser.email;
        });
        
        if (currentUser) {
            alert("yay you are logged in now!");
            sessionStorage.setItem("user", JSON.stringify(currentUser));
            //take them to a new view, load landing page
        }
        else {
            alert("you are not in our db, please register");
            $("#registerButton").click(function() {
                APIManager.saveUser(newUser)
                .then(() => {
                    // Clear the form fields
                    FormManager.clearForm()
                    alert("yay you are logged in now!");
                    //take them to a new view, load landing page
                })
            })


        }
    };
}

// }
module.exports = verifyActiveUser