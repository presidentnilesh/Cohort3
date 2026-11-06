/// toipc to cover : 
// attribute and properties , creating , remob=ving and inserting element form dom .
// setAttribute , getAttribute , removeAttribute , hasAttribute

// const id = document.querySelector("#idd")
// id.setAttribute("width", "200")     // it is use to set attribute like bg , fontsize or anything (properties)
// let res = id.getAttribute('class')
// console.log(res)
// let nilu = id.getAttribute('width')
// console.log(nilu)
// // id.removeAttribute('width')     // it is use to remove attribute 
// console.log(id.hasAttribute('width'))   // check whether the attribute is present or not (return in boolean)


// let inp = document.querySelector('input')
// let btn = document.querySelector('button')



// btn.addEventListener('click' , ()=>{
//     console.log("this is inp.value",inp.value)
//     console.log("this is from inp.getAttribute ",inp.getAttribute('value'))
// })


        // creating , insertion and removing element from DOM
// 1. createElement 

    // in insertion there are two method
        // 1. appendChild - old method
        // 2. append - new method

let footer = document.createElement('footer')
const span = document.createElement('span')
let main = document.querySelector('main')
document.body.appendChild(footer)

span.innerHTML = "hey i am dynamically <i>written</i> "
// main.appendChild(footer)
// main.appendChild(span)
main.append(footer,span)
// main.removeChild(span)       // it is use to remove any element 