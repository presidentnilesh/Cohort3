// console.log("hello")


// this is mothod sue event in eventlistener 
// const main = document.querySelector('main')

// main.addEventListener('click', (e)=>{
// console.log(e.target)
// })


// setInterval
// setInterval(() => {      // this one keep running 
//     console.log("kaishe ho sir jii ")    
// }, 1000);

//setTimeOut

// setTimeout(() => {      // it run only one time ..
//     console.log("this is timeout")      
// })


// random numbers
// const rand = Math.random()*10    // it will give you numbers from 0 to 1 
// let a = Math.floor(rand)
// console.log(a)


// -----------------------------Project------------------------



const main = document.querySelector('main')
const btn = document.querySelector('button')
const timer = document.querySelector("#timer")
const scoree = document.querySelector("#score")
const overlay = document.querySelector("#overlay")

const box = document.createElement('div')
box.classList.add("box")


let interval;
let timeOut;
let overlayTimeout
let time = 0
let score = 0

const boxColor = () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`    // we write rgb as rgb(2,3,4)
}

const randomBox = () => {
    main.append(box)
    box.style.backgroundColor = boxColor()

    let mainH = main.clientHeight - box.offsetHeight
    let mainW = main.clientWidth - box.offsetWidth

    time += 1
    timer.textContent = time;

    let t = Math.random() * mainH
    let l = Math.random() * mainW


    box.style.top = `${t}px `
    box.style.left = `${l}px`
}


btn.addEventListener('click', (e) => {
    randomBox()
    clearTimeout(timeOut)
    clearTimeout(overlayTimeout)
    clearInterval(interval)

    time = 0;
    timer.textContent = time;

    interval = setInterval(() => {
        randomBox()
    }, 1000);

    timeOut = setTimeout(() => {
        clearInterval(interval)
        overlay.style.display = "flex"
        overlay.innerHTML = `<h3>Game Over</h3>
        <p>Your score is : ${score}</p>`

        overlayTimeout = setTimeout(() => {
            overlay.style.display = "none"
            timer.textContent = 0 
            scoree.textContent = 0 
        }, 3000);

    }, 10000);
})

box.addEventListener('click', () => {
    score += 1
    scoree.textContent = score
})

