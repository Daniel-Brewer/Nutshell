const APIManager = require("./APIManager")

const storage = Object.create(null, {
  loadData: {
    enumerable: true,
    writable: true,
    value: function () {
      const databaseString = sessionStorage.getItem("activeUser")
      // Return user ID as integer
      return parseInt(JSON.parse(databaseString))
    }
  },
  saveData: {
    enumerable: true,
    writable: true,
    value: function (dataObject) {
      // Use username to find object in /users
      APIManager.getAllObjects("user").then((item) => {
        const userObject = item.find((user) => {
          return user.userName === dataObject.userName
        })
        const stringData = JSON.stringify(userObject.id)
        sessionStorage.setItem("activeUser", stringData)
      })
    }
  }
})

module.exports = storage