    // insertBefore

// const main = document.querySelector('main')
// const box1 = document.querySelector('.box1')
// const box2 = document.querySelector('.box2')
// const box3 = document.querySelector('.box3')


// box2.style.backgroundColor = 'yellow'
// box3.style.backgroundColor = 'blue'

// main.insertBefore(box2 , box1)


//. what if html dont have all the box , so we have to create box and then use insertBefore ( i have deleted all three boxes from html)


const main = document.querySelector('main')

const box1 = document.createElement('div')
const box2 = document.createElement('div')
const box3 = document.createElement('div')

box1.classList.add('box')
box2.classList.add('box')
box3.classList.add('box')

box3.style.backgroundColor = "green"
box2.style.backgroundColor = "yellow"
main.append(box1)
main.append(box3)
main.append(box2)

// main.prepend(box3)   // this will make the box3 before box1
box3.before(box1)   // this will move the box3 before box1 
box3.after(box2)     // this will move the box3 after box2 
