/* login function */
const LoginManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#username").value = ""
            document.querySelector("#email").value = ""
        }
    },
    renderLoginForm: {
        value: () => {
            return `
                <fieldset class="loginForm">
                    <label for="username">username</label>
                    <input required type="text" id="username" placeholder="username">
                </fieldset>
                <fieldset class="loginForm">
                    <label for="email">email</label>
                    <input required type="text" id="email" placeholder="email">    
                </fieldset>
                <button id="loginButton">Login</button>
            `
        }
    }
})
/* session storage here */
// let database = Object.create(null, {
//     init: {
//         value: function(){
//             this.getDatabase();
//         },
// getDatabase: {
//     value: function(){
//         return JSON.parse(sessionStorage.getItem("users")) || [];
//     }
// },
// setUsers: {
//     value: function(users){
//         sessionStorage.setItem("users", JSON.stringify(users));
//         this.users = this.getDatabase();
//     }
// }
// });

// module.exports = LoginManager
// module.exports = database;