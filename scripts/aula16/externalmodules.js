"use strict";
exports.__esModule = true;
/// <reference path="./ValidatorExternal.ts"/>
var EmailValidatorExternal_1 = require("./EmailValidatorExternal");
var URLValidatorExternal_1 = require("./URLValidatorExternal");
var emailExamples2 = ["lala@", "lala@lala", "jprado@daitan.com"];
var urlExamples2 = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com"];
emailExamples2.forEach(function (email) {
    var test = new EmailValidatorExternal_1.EmailValidatorExternal();
    console.log("".concat(email, " ").concat(test.isValid(email)));
});
urlExamples2.forEach(function (url) {
    var test = new URLValidatorExternal_1.URLValidatorExternal();
    console.log("".concat(url, " ").concat(test.isValid(url)));
});
