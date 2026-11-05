const H1 = document.querySelectorAll('h1') // only select the first h1
const H2 = document.getElementsByTagName('h1')
console.log(H2) // print in NOdeist [ it only update when reloaded ]
console.log(H1) // print in HtmlCollection   [ it run live , no need to reload ]
