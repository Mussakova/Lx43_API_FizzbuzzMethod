const fizzbuzzService = require("../../services/fizzbuzzService");

class explorerController{
    static applyValidationInNumber(number){
        return fizzbuzzService.applyValidationInNumber(number);
    }
}
module.exports = explorerController;