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


var macbook = {
    name : "macbook air m4",
    chilp :"m4" ,
    year : 2025,
    battery : 1000 ,
    how : function(){
        console.log("sexyy hai")
    }   
}
var user ={
    name : "Nilesh KUmar ",
    age : 22 
}

user.__proto__ = macbook        // by this we are inheriting all the methods which are in macbook to user 
user.how()