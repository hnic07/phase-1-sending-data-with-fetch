const { Body } = require("node-fetch");

const submitData = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json", 
        "Accept" : "application/json", 
    },
    body: JSON.stringify({
        name: "Heman",
        email: "heman@heman.com",
    })
}

fetch(("http://localhost:3000/users"), submitData)
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        console.log(object)
    })
    .catch(function (error) {
        alert ("Where the data at?");
        console.log(error.messasge);
    })
