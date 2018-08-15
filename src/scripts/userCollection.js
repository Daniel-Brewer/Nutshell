"use strict";

let database = Object.create(null, {
    init: {
        value: function(){
            this.getDatabase();
        }
    },
    contacts: {
        value: [],
        writable:true
    },
    adduser: {
        value: function(newUser){
            let database = this.getUsers();
            database.push(newUser);
            this.setUsers(database);
        }
    },
    getUsers: {
        value: function(){
            return this.contacts;
        }
    },
    getDatabase: {
        value: function(){
            return JSON.parse(sessionStorage.getItem("users")) || [];
        }
    },
    setUsers: {
        value: function(users){
            sessionStorage.setItem("users", JSON.stringify(users));
            this.users = this.getDatabase();
        }
    }
});


module.exports = database;