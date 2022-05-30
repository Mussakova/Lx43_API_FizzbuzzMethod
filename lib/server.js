const explorerController = require("./controllers/explorerController");
const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/v1/fizzbuzz/:numberx", (request, response)=>{
    const number = request.params.numberx;
    const validation = explorerController.applyValidationInNumber(number);
    response.json(validation);
});

module.exports = app;