const H1 = document.querySelectorAll('h1') // only select the first h1
const H2 = document.getElementsByTagName('h1')
const h3 = document.getElementById('heading')    // as it hae element , so it is for single element
const h4 = document.getElementsByClassName('hy')    // as it hae elements , so it is for multiple elements 
console.log(H2) // print in NOdeist [ it only update when reloaded ]
console.log(H1) // print in HtmlCollection   [ it run live , no need to reload ]

console.log(h3)
console.log(h4)

        // NOTE : we will use document.querySelector as the universal selector in wich (tag) , (#id) , (.classname)

// ways to change content of html
// h3.textContent = "Nilesh "
// h3.innerHTML = "anand "
// h3.innerText = "uttam"


heading.style.padding = "30px"    // by this we can change the bg colour without changing the html 
heading.style.gap = '30px'