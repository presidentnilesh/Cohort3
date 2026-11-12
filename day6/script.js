// localStorage.setItem("name" , "sandeep Kaalu")
// let lsd = localStorage.getItem("name")

// console.log(lsd) 

// localStorage.removeItem("friends")

const friends = [
    {
        name:"kaalu kaaliya",
        age : 22,
        city : "jamshedpur"
    },
    {
        name:"khushi",
        age : 21,
        city : "jamshedpur"
    },
    {
        name:"kanishk gupta",
        age : 20,
        city : "Ludhiyana"
    },
]

let newData = ['ritik raj']

localStorage.setItem("gandu-dost", JSON.stringify(friends))
localStorage.setItem("gandu-dost", JSON.stringify(newData))     // this is a way to update the localStorage data

const lsd = localStorage.getItem("gandu-dost")
console.log(JSON.parse(lsd))
