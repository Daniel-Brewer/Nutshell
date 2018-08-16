// change getAllEntries and other functions to be more related to this project need db calls for each resource tasks etc.

const APIManager = Object.create(null, {
    saveUser: {
        value: (entry) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    //  getting user array resource
    getAllUsers: {
        value: () => {
            return fetch("http://localhost:8088/users?_order=desc&_sort=date").then(r => r.json())
        }
    },

    deleteEntry: {
        value: (id) => {
            return fetch(`http://localhost:8088/entries/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = APIManager