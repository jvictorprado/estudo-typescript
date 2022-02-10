/// <reference path="./ValidatorExternal.ts"/>
import { EmailValidatorExternal } from "./EmailValidatorExternal";
import { URLValidatorExternal } from "./URLValidatorExternal";

let emailExamples2 = ["lala@","lala@lala","jprado@daitan.com"];
let urlExamples2 = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com"];

emailExamples2.forEach(email=>{
    let test = new EmailValidatorExternal();
    console.log(`${email} ${test.isValid(email)}`);
});
urlExamples2.forEach(url=>{
    let test = new URLValidatorExternal();
    console.log(`${url} ${test.isValid(url)}`);
});