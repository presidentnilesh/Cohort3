// var a ={
//     names : "uttam" ,
//     address:"Bihar",
//     age : 29 , 
//     isSingle:true ,
//     haveCrush:true 
// }
// a.brother = "Anand" ;

// a.isSingle = false ;
// delete a.haveCrush // delete
// // console.log(a)

// console.log(Object.keys(a))     // return all the keys of the obj
// console.log(Object.values(a))       // return all the values of the obj
// console.log(Object.entries(a))      // return keys and values in orgainsed form 


    // function inside an object 

// var banda = {
//     name : "Knishk",
//     city : "ludhiyana" ,
//     age : 20 ,
//     kind : false ,
//     profession : [ "student" , "gamer", "lodu"],
//     bandi :{
//         names : "pata nahi" ,
//         profession: false ,
//         age : 19 ,
//         city : "delhi"
//     },
//     sayHI:function(){
//         console.log("Hello world !") 
//     }

// }

// banda.sayHI()


    // more then one functoin under object or we can say more then 2 methods 

// var maths ={
//     add :(a,b)=>{
//         return a+b 
//     },
//     sub :(a,b)=>{
//         return a-b
//     },
//     mul : (a,b)=>{
//         return a*b
//     },
//     div:(a,b)=>{
//         return a/b
//     }
// }
// console.log(maths.add(12,34))
// console.log(maths.sub(90,40))
// console.log(maths.mul(4,10))



        // another way to add some key and value

// var obj = {
//     names : "Anand",
//     city : "patna",
// }
// obj["age"] = 24 ;       // as we know array is also an object 

// console.log(obj)


        // seal in object

// const data = {
//     name : "Uttam" ,
//     age : 23 
// }

// Object.seal(data)
// data.city = "Anand"
// console.log(data)

    // as we know array is also an obj so seal will also work in array 

// const arr = [12,34,56,78]

// Object.seal(arr)
// // arr.push(23)
// console.log(arr)


    // destructuring in arary 

// var arr = [12,34,5,56,32]

// var [a,s,...f] = arr 

// console.log(f)


    //distrubution in objects 

var obj = {
    name :"NIlesh ",
    class : "CSE", 
    roll : 2344 ,
    place : "CDG"
}

var {roll, name} = obj 

console.log(roll)
console.log(name)