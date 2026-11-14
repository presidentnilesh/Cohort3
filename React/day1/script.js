// let h1 = document.createElement('h1')
// h1.textContent = "hello sir kaishe ho aap ?"
// document.body.append(h1)

//         // react/virtual dom starts from here 
// let rh1 = React.createElement('h1', {} , "kaisha hai bhai tuu ?");
// // let rh2 = React.createElement('h1', null , "kaisha hai bhai tuu ?");     // we can also give the null attribute so that no class will be form  or we can also give the blank object also 
// let rh3 = React.createElement('h1' , {} , (React.createElement("span", {}, " this is a span tag bro")))
// console.log("real dome ->" , h1)
// console.log("virtual dome ->" , rh1)
// console.log("span tag is :", rh3 ) 

// const realDomElement = document.querySelector('#root')      // here we have just selected the real dom as realDomElement 

// let rootOfReact = ReactDOM.createRoot(realDomElement)   // in this react has made his own dom 

// rootOfReact.render(rh1) // here we have render the react element in the react dom 

// // we can also write , let rootOfReact = ReactDOM.createRoot(realDomElement).render(rh1)



// // i am writing all this by myself

// let ph1 = React.createElement('h1' , {} , "i will be the DEV")

// const realDomElement = document.querySelector('#root')

// let reactDomElement = ReactDOM.createRoot(realDomElement).render(ph1)


// this is how react is starting 

// we can also make div inside div and span inside div 

let root = document.querySelector('#root')

// the h1 for the react 
let rDomElement = React.createElement('h1', {} , React.createElement('h1', {}, React.createElement('span' , {} , "span inside a div that is already inside another div")))

let reactDomElement = ReactDOM.createRoot(root).render(rDomElement)