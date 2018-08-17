const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#username").value = ""
            document.querySelector("#email").value = ""
        }
    },
    renderRegistrationForm: {
        value: () => {
            return `
                <fieldset class="registrationForm">
                    <label for="username">username</label>
                    <input required type="text" id="username" placeholder="username">
                </fieldset>
                <fieldset class="registrationForm">
                    <label for="email">email</label>
                    <input required type="text" id="email" placeholder="email">    
                </fieldset>
                <button id="registerButton">Register User Account</button>
            `
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
                <button id="registerButton">Register User Account</button>
            `
        }
    }

})

module.exports = FormManager