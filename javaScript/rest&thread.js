// let arr = [10,20,30,40,50]

// let arr2 = [ ...arr]        // using spread opetratoe for copying all element of arr

// console.log(arr2)


    // using spread operator to copy all the element of obj and then changing any value of obj2 will not effect obj
// let obj = {
//      name : "Anand" ,
//      age :  24 ,
//      place : "patna"
//     }
// let {name,...an } = obj
// let obj2 = {...obj}

// obj2.name = "sandeep"
// console.log(obj2.name)
// console.log(obj.name)

 

    // deep copy 

let obj = {
    name : "NIlesh" ,
    class : "B2" ,
    city : "CDG",
    age : 22,
    sub : {
        maths : "himanshi ma'am",
        english : "Nindiya" , 
        phy : "bindu"
    }
}

let copy = JSON.stringify(obj)
JSON.parse(copy)
obj.sub.maths="dipika ma'am"
console.log(obj)

console.log(copy)