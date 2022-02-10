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
