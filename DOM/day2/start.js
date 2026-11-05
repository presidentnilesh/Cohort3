const body = document.body
// const main = document.querySelector('main')
const head1 = document.querySelector('#head1')
const div = document.querySelector('#div')

// console.log(body.children)
// console.log(body.childNodes)

// console.log(main.children)
// console.log(main.childNodes)


// const h1 = document.querySelector('h1')
// console.log(h1)
// h1.textContent = "main change ho gyaa "
// h1.innerHTML = "kaisha hai tu <i>this is in italic<i>"

// console.log(body.innerText) // this will give you all the text with tags also
// console.log(body.innerHTML) // this will give you everything written inside the html with no tag 

// we can change all the css throught this method also (using style mrthod)
// body.style.backgroundColor = "blue"
// h1.style.color = "pink" 
// h1.style.fontStyle ="italic"

head1.textContent= "hey kaishe ho aap , bade dino baad mile aap "

    // to chcek whether heading class exist in head1 tag
const isClass = head1.classList.contains('hading')
console.log(isClass)

    // to replace the class
head1.classList.replace("hading","gadha")   // it replace and write the name of class

    // implementing toggle(it menas if therir is class then it will remove it and is there is not a class then it will add a class)

head1.classList.toggle('gadha')

div.classList.add("bhoot")  
div.classList.remove("bhoot")