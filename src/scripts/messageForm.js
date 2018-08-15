const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#username").value = ""
            document.querySelector("#email").value = ""
        }
    },
    renderMessageForm: {
        value: () => {
            return `
                <fieldset class="messageForm">
                    <label for="username">username</label>
                    <input required type="text" id="username" placeholder="username">
                </fieldset>
                <fieldset class="messageForm">
                    <label for="email">email</label>
                    <input required type="text" id="email" placeholder="email">    
                </fieldset>
                <button id="messageButton">Chat Message</button>
            `
        }
    }

})

module.exports = FormManager