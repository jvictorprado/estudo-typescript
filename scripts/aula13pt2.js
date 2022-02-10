// import { Validation } from "./aula13";
/// <reference path="./aula13.ts"/>
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
// import { EmailValidator, UrlValidator } from "./aula13";
var emailExamples = ["lala@", "lala@lala", "victorprado@gmail.com"];
var urlExamples = ["devdojo.com", "www.devdojo.com.br", "http:///www.devdojo.com.br"];
emailExamples.forEach(function (email) {
    var test = new Validation.EmailValidator();
    console.log("".concat(email, " ").concat(test.isValid(email)));
});
urlExamples.forEach(function (url) {
    var test = new Validation.UrlValidator();
    console.log("".concat(url, " ").concat(test.isValid(url)));
});
