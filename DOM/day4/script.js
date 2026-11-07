// const btn= document.querySelector('button');
// const div= document.querySelector('div');
// const main= document.querySelector('main');
// const body= document.body;
//  // to invoke bubbling event ( by default browser runs on event bubbling )
// // btn.addEventListener('click',()=>{
// //     console.log('button triggered')
// // })
// // div.addEventListener('click',()=>{
// //     console.log('div triggered')
// // })
// // main.addEventListener('click',()=>{
// //     console.log("main triggered")
// // })
// // body.addEventListener('click',()=>{
// //     console.log('body triggered')
// // })

// // to invoke capturing event
// btn.addEventListener('click',()=>{
//     console.log('button triggered')
// } , {capture:true})
// div.addEventListener('click',()=>{
//     console.log('div triggered')
// }, {capture:true})
// main.addEventListener('click',()=>{
//     console.log("main triggered")
// }, {capture:true})
// body.addEventListener('click',()=>{
//     console.log('body triggered')
// }, {capture:true})



// submit event

const form = document.querySelector("form")
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const user = document.querySelector('.users')

// form.addEventListener('submit',(events)=>{
//     events.preventDefault()
//     console.log(name.value)// best way to acccess the values
//     console.log(email.value)

//     // name.value = ""
//     // email.value = ""
//         //OR
//     form.reset()
//     // console.log(events.target[0].value) // another method to access things written inside the input or any event

// })

// to bring the card when click submit

form.addEventListener('submit', (events) => {
    events.preventDefault()
    let naam = name.value;
    let mail = email.value;
    if (naam.trim() === "" && mail.trim() === "") return;  // we write this so that if name or email is empty then no card will be created 
    user.innerHTML += `<div class="user-card">
    <div class="img-box">
    <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    alt="image">
    </div>
    <div class="text">
    <h3>Name : ${naam}</h3>
    <p>Email : ${mail}</p>
    </div>
    </div>`

    form.reset()        // make the form empty to write next form 
})