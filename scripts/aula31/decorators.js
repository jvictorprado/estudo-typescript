//FUNÇÕES EM QUE VC CONSEGUE ADC METADADOS A CLASSES 
// TEM NO TS MAS N NO JS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @course
// class PersonD{
//     name:string;
// }
// function course(target:any){
//     Object.defineProperty(target.prototype,"course",
//     {value: () => "TS > JS"});
// }
// let pe4 = new PersonD();
// console.log(pe4.course());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher = __decorate([
        Course({
            course: "DejDojo"
        })
    ], Teacher);
    return Teacher;
}());
function Course(config) {
    return function (target) {
        Object.defineProperty(target.prototype, "course", { value: function () { return config.course; } });
    };
}
var teacher = new Teacher();
console.log(teacher.course());
