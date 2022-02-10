// import { Validation } from "./aula13";
/// <reference path="./aula13.ts"/>
import EmailValidator = Validation.EmailValidator;
import UrlValidator = Validation.UrlValidator;

// import { EmailValidator, UrlValidator } from "./aula13";
let emailExamples = ["lala@","lala@lala", "victorprado@gmail.com"];
let urlExamples =  ["devdojo.com","www.devdojo.com.br","http:///www.devdojo.com.br"];

emailExamples.forEach(email=>
    {
        const test = new Validation.EmailValidator();
        console.log(`${email} ${test.isValid(email)}`);
    }
);

urlExamples.forEach(url=>
    {
        const test = new Validation.UrlValidator();
        console.log(`${url} ${test.isValid(url)}`);
    }
);
