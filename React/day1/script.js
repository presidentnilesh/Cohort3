let h1 = document.createElement('h1')
h1.textContent = "hello sir kaishe ho aap ?"
document.body.append(h1)

let rh1 = React.createElement('h1', {class:"kucNahi"} , "kaisha hai bhai tuu ?");
// let rh2 = React.createElement('h1', null , "kaisha hai bhai tuu ?");     // we can also give the null attribute so that no class will be form  or we can also give the blank object also 
let rh3 = React.createElement('h1' , {} , (React.createElement("span", {}, " this is a span tag bro")))
console.log("real dome ->" , h1)
console.log("virtual dome ->" , rh1)
console.log("span tag is :", rh3 ) 