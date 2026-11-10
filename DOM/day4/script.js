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
const emaill = document.querySelector('#email')
const dpp = document.querySelector('#dpp')
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


const usersData = [
    {
        name: "Aarav Sharma",
        email: "aarav.sharma@gmail.com",
        dp: "https://randomuser.me/api/portraits/men/32.jpg",
        dob: "2002-05-14"
    },
    {
        name: "Priya Verma",
        email: "priya.verma@gmail.com",
        dp: "https://randomuser.me/api/portraits/women/44.jpg",
        dob: "2003-08-21"
    },
    {
        name: "Rahul Singh",
        email: "rahul.singh@gmail.com",
        dp: "https://randomuser.me/api/portraits/men/75.jpg",
        dob: "2001-11-09"
    },
    {
        name: "Ananya Gupta",
        email: "ananya.gupta@gmail.com",
        dp: "https://randomuser.me/api/portraits/women/68.jpg",
        dob: "2004-02-17"
    },
    {
        name: "Kabir Mehta",
        email: "kabir.mehta@gmail.com",
        dp: "https://randomuser.me/api/portraits/men/52.jpg",
        dob: "2002-12-03"
    }
];

const ui = ()=>{

    user.innerHTML="";      // we did this so that whenever we call the ui , the array should not repeat .
    
    usersData.forEach((elem,index)=>{
    user.innerHTML += `<div class="user-card">
    <div class="img-box">
    <img src=${elem.dp}>
    </div>
    <div class="text">
    <h3>Name : ${elem.name}</h3>
    <p>Email : ${elem.email}</p>
    </div>
    <div class="actions">
                <button id="edit">Edit</button>
                <button onclick="deleCard(${index})" id="del">Delete</button>       
            </div>
    </div>`
})
}
ui()

form.addEventListener('submit', (events) => {

    events.preventDefault()
    let naam = name.value;
    let mail = emaill.value;
    let dp = dpp.value;

    if (naam.trim() === "" || mail.trim() === "" || dp.trim()==="") return;  // we write this so that if name or email is empty then no card will be created 
    usersData.push({
        name:naam ,
        email:mail,
        dp
    });

    ui()
 
    console.log(usersData)

    form.reset()        // make the form empty to write next form 
})


let deleCard = (index)=>{
    usersData.splice(index,1)
    console.log(usersData)
    ui()
}   