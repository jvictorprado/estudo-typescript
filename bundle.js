(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.EmailValidatorExternal = void 0;
var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var EmailValidatorExternal = /** @class */ (function () {
    function EmailValidatorExternal() {
    }
    EmailValidatorExternal.prototype.isValid = function (str) {
        return emailRegex.test(str);
    };
    return EmailValidatorExternal;
}());
exports.EmailValidatorExternal = EmailValidatorExternal;

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.URLValidatorExternal = void 0;
var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
var URLValidatorExternal = /** @class */ (function () {
    function URLValidatorExternal() {
    }
    URLValidatorExternal.prototype.isValid = function (str) {
        return urlRegex.test(str);
    };
    return URLValidatorExternal;
}());
exports.URLValidatorExternal = URLValidatorExternal;

},{}],3:[function(require,module,exports){
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

},{"./EmailValidatorExternal":1,"./URLValidatorExternal":2}]},{},[3]);
