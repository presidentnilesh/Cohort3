// console.log("hello world")


// const user = {
//     name : "ritik",
//     greet(){
//         console.log(this.name)
//     }
// }
// user.greet()

// function introduce() {
//     console.log(this.name)
// }

// const person = {
//     name : "Ritik"
// }

// introduce.call(person)


// callback

// function greet(name,callback){
//     console.log("HEllo" , name)
//     callback()
// }
// const message = ()=>{
//     console.log("welcome!")
// }

// greet("Nlesh", message )


// using callback function 
// function greet(name){
//     console.log("hello", name)
// }

// function welcome(callback){
//     greet(callback)
// }

// welcome("ritik")


// setime out by another method

// function greet(name){
//     console.log("haello" , name )
// }

// setTimeout(greet,2000,'nilesh');


        // cancel a settimeout before it execute anything 

// const greet = setTimeout(() => {
//     console.log("kaisha hai bhai")
// }, 2000);
// clearTimeout(greet)     // it cancel the execution of the greet function 

        // setInterval 
// a = 6
// setInterval(() => {
//     if(a>0){
//         console.log(a)
//         a--
//     }
//     else return 
// }, 1000);


        //fetching user and the use setime out to print name and all

// const fetchUser= (callback)=>{
//     console.log("fetching user ...")
//     setTimeout(() => {
//         let user = {
//             id:1,
//             name : 'Ritik',
//             age :  18,
//         }   
//         callback(user)
//     }, 2000);
// }

// fetchUser((value)=>{
//     console.log(value)
// })      // in this code , first we called the fethcusera  and in fetchuser we have callback , and in callback we have user .. so on calling fetchuser we are calling callback, and callback is calling user .. so user is printing .
// and in this callback is not a function , it is a referance 


        // promise

const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("data recerived")
    }, 2000);
})

promise.then((value)=>{
    console.log(value)
})