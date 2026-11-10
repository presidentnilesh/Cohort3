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

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("data recerived")
//     }, 2000);
// })

// promise.then((value)=>{
//     console.log(value)
// })


        // promise - rejected 

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("Prmoise failed")
//     }, 2000);
// })
// promise.then((varlue)=>{
//     console.log("good")
// })
// .catch((error)=>{   // as the promise rejeccted 
//     console.log("something went wrong :" , error)
// })


        // promise chain 

// function addTen(num){
//     return new Promise((resolve)=>{
//         resolve(num + 10)
// })
// }
// addTen(0).then((result)=>{
//     console.log(result)     // 10
//     return addTen(result)
// }).then((result)=>{
//     console.log(result) // 20
//     return addTen(result)
// }).then((result)=>{
//     console.log(result) // 30
// })

        // fetch 

const response = async ()=>{
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')        // await is use so that the program wil wait until it api will not return the data

        if(!data.ok){
            return new Error("response nahi aaya bade bhai ")
        }
        let data2 = await data.json()
        console.log(data2   )
    } catch (error) {
        console.log(error)
    }
}

response()