    // prototype
// var arr = [ 20,30,40,50]
// var obj = {
//     name : "Nilesh ",
//     age : 23 
// }

// function heera(){
//     var n = "nilesh"
//     console.log(n)
// }
// console.log(arr.__proto__.__proto__)
// console.log(heera.__proto__.__proto__)

// console.log(Array.prototype)


// var macbook = {
//     name : "macbook air m4",
//     chilp :"m4" ,
//     year : 2025,
//     battery : 1000 ,
//     how : function(){
//         console.log("sexyy hai")
//     }   
// }
// var user ={
//     name : "Nilesh KUmar ",
//     age : 22 
// }

// user.__proto__ = macbook        // by this we are inheriting all the methods which are in macbook to user [in this user.proto means hamlog user ka prototype main macbook ko daal rahe hai .]
// user.how()


    // example 3 

var college = {
    coll : "iit",
    rating :  "A++", 
    location : "Delhi",
    area : 120 ,
}
var course = {
    branch : "CSE", 
    students : 500 ,
    package : "15LPA",
}
var student = {
    name : "Nilesh ",
    rank : 100 ,
    age : 22 ,
    marks : 87
}

student.__proto__ = course 
course.__proto__ = college 

console.log(student.area)