function populateDB() {
    // assigning data in sting form
    const stringifiedDatabase = JSON.stringify(snackCakes)
    sessionStorage.setItem("item", stringifiedDatabase)
}
// converting from string to data
const databaseString = sessionStorage.getItem("item")
// Use JSON.parse() to convert the string back into an object
const data = JSON.parse(databaseString);
console.log(databaseString);
console.log(data);