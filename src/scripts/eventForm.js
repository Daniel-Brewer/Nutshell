const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#username").value = ""
            document.querySelector("#email").value = ""
        }
    },
    renderEventForm: {
        value: () => {
            return `
                <fieldset class="eventForm">
                    <label for="username">username</label>
                    <input required type="text" id="username" placeholder="username">
                </fieldset>
                <fieldset class="eventForm">
                    <label for="email">email</label>
                    <input required type="text" id="email" placeholder="email">    
                </fieldset>
                <button id="registerButton">Register User Account</button>
            `
        }
    }

})

module.exports = FormManager