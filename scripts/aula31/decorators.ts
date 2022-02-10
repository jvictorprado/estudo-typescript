
//FUNÇÕES EM QUE VC CONSEGUE ADC METADADOS A CLASSES 
// TEM NO TS MAS N NO JS

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


 
// @Course({
//     course: "DejDojo"
// })
// class Teacher{
//     name:string;
// }

// function Course(config:any){
//     return (target:any) => {
//         Object.defineProperty(target.prototype,"course", {value: () => config.course});
//     }
// }

// let teacher = new Teacher();
// console.log(teacher.course());