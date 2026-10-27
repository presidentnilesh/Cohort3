// var student = {
//     user : "nilesh",
//     class : "B.tech",
//     age : 23,
//     sayHi: function (){
//         console.log("Hiiii",this.user+ "and his age is" , this.age)
//     }
// }
// var student2 = {
//     user : "Uttam" , 
//     age : 34  ,
//     city : "patna "
// }

// student.sayHi.call(student2)
// student.sayHi()


        // now we are writing function on the outside of the obj 

// var student1 = {
//     user : "nilesh",
//     age : 23,
//     city : "jamshedpur"
// }
// var student2 = {
//     user : "Uttam" , 
//     age : 34  ,
//     city : "patna "
// }

// var student3 = {
//     user : "Anand", 
//     age : 24 ,
//     city : "bihar"
// }

// var sayHi = function (){
//         console.log("Hiiii",this.user, "and his age is" , this.age)
//     }


// sayHi.call(student1)    // we are ecxplicitely binding the sayHi function 

        // passing. arguments in the function using call method

var obj = {
    user : "Anand" ,
    city :  "Patna",
    sayIntro:function(field ,loves){
        console.log(`${this.user} lives in ${this.city} and he is very talented in ${field} and loves ${loves}`)
    }
}

var obj2 = {
    user : "NIlesh" ,
    city :  "cdg",
}
obj.sayIntro.call(obj2,"llb","mummy")