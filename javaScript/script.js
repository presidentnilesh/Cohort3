// console.log("kaishe hai aap miss ?");
// console.log("maine soocha ke aap aache hai to maine jaada nahi pucha .");
// console.warn("disclamair");
// console.error("this is an error");
// console.table(["Anand", "uttam","Nilesh" ])

// // (alert("kaishe hai aap "))       // it only gives you a pop-up
// // var ans = confirm("kya aap 18_ ho ?")         // it asked. yes or cancel 
// // console.log(ans)

// var naam = prompt("enter your name ")
// console.log(naam)
// console.log('kaishe')

// var a = 10 
// var b = String(a)
// console.log(typeof(b)) 


// var a = prompt("enter the first number ")
// var b = prompt("enter the second number ")

// var a2 = Number(a)
// var b2 = Number(b)

// console.log(alert("kaishe hai aap"))

// console.log(a2+b2)

// function bbb(){
//     console.log("all good na ?")
// }
// var b = function(){
//     console.log('moja maa')
// }
// // arrow function 
//   a = ()=>{
//     console.log("kaishe hai aap miss ? ")
// }

// b()
// a()
// bbb()

// function greet(user= "harsh" , age = 20){
//     console.log("hello" , user , "your age is " , age)
// }

// greet(undefined, 32)

// var arr = [ 10 , 20 , 30 , 40]

// var arr2 = [...arr]     // this method is known as spread operator 
// arr2.push(99)
// console.log(arr2)
// console.log(arr)

        // forEach 
// var arr = [10,20,30,40]
// var sum = 0 
// arr.forEach(function(val){
//     sum += val 
// })
// console.log(sum)

        // map ( in this a new array is form in new location unlike foreach which only itterate to all the elememnt of the same array of the same loation. )

// var arr = [ 10,20,30,40]

// var arr2 = arr.map(function(elem){
//     return elem*elem
// })

// function double(x){
//     return x*2
// }
// var m = arr.map(double)
// console.log(m)
// console.log(arr2)
// console.log(arr)

        // filter ( it is use to filter the elements of the array )

// var arr= [ 5,8,13,76,34]

// var arr2 = arr.filter(function(elem){
//     return elem%2==0
// })
// console.log(arr2)

    // example 2 

// var marks = [45 , 78, 92, 81, 67]

// var pass = marks.filter((value)=>{
//     return value>75
// })
// console.log("all the sutdent who scored grater then 75 are as follow :",pass)


        // example 3 ( to finds the largest number)

// var arr = [ 3,56,24,910,24,75,34]

// var ans = arr.filter(function(value){
//         return value === Math.max(...arr)
// })
// console.log(ans)
// var tim = marks.map((vari)=>{
//         return vari*2 
// })
// console.log(tim);


// let x = function(){
//         console.log("anand")
// }
// x()


                // IIFE ( imediate invocked function envocked )
// (function() {
//     console.log("I run immediately!");
// })();

                // reduce 

// var arr = [10,20,30,40]

// let sum = arr.reduce(function (acc , value){            // we have to pass accumulator and the value -> accumulator is the box/container which contains the value 
//         // console.log(acc)                             // the result will the updated value of the accumulator 
//         return(acc*value)            
        
// },1)

// console.log(sum)

        // example 2 ( to find maximun nmumber )

