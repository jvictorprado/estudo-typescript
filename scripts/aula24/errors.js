var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function doSomethingWithString(input) {
    if (input === undefined || input === "") {
        throw new StringNotValidError("The string ".concat(input, " isn't valid"));
    }
    return input;
}
var ApplicationError = /** @class */ (function () {
    function ApplicationError(message) {
        this.message = message;
        this.name = "ApplicationError";
        if (typeof console !== undefined) {
            console.log("Error: ".concat(message));
        }
    }
    ApplicationError.prototype.toString = function () {
        return "".concat(this.name, " : ").concat(this.message);
    };
    return ApplicationError;
}());
var StringNotValidError = /** @class */ (function (_super) {
    __extends(StringNotValidError, _super);
    function StringNotValidError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StringNotValidError;
}(ApplicationError));
try {
    var input = doSomethingWithString("");
}
catch (err) {
    if (err instanceof ApplicationError) {
        console.log("no action inside if");
        throw err;
    }
    console.log("no action");
}
finally {
    console.log("aways executed");
}
