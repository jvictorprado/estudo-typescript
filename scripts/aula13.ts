//MODULOS INTERNOS - NAMESPACES

namespace Validation{
    let emailRegex:RegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let urlRegex:RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    export class EmailValidator{
        isValid(str:string):boolean{
            return emailRegex.test(str);
        }
    }
    export class UrlValidator{
        isValid(str:string):boolean{
            return urlRegex.test(str);
        }
    }
    
}   
// export {Validation}