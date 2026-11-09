const btn = document.querySelector('button')
const name = document.querySelector('#name')
const bio = document.querySelector('#bio')
const url = document.querySelector('#url')
const main = document.querySelector('main')
const form = document.querySelector('form')
const user = document.querySelector('.user')



const usersData = [
    {
        name: "Aarav Sharma",
        email: "aarav.sharma@gmail.com",
        url : "https://randomuser.me/api/portraits/women/44.jpg",
        bio : "kutta hu main bhai"
    },
    {
        name: "Priya Verma",
        email: "priya.verma@gmail.com",
        url : "https://randomuser.me/api/portraits/men/75.jpg",
        bio : "harami hu main broo"
    },
    {
        name: "Rahul Singh",
        email: "rahul.singh@gmail.com",
        url : "https://randomuser.me/api/portraits/men/32.jpg",
        bio : "kuch bhi ban jayunga , aap bass bolo",
    },
    {
        name: "Ananya Gupta",
        email: "ananya.gupta@gmail.com",
        url : "https://randomuser.me/api/portraits/women/68.jpg",
        bio : "chinaar hu , ladki dakhta hu",
    },
    {
        name: "Kabir Mehta",
        email: "kabir.mehta@gmail.com",
        url: "https://randomuser.me/api/portraits/men/52.jpg",
        bio : "Muttal hu , bass muth marta hu"
    }
];

const ui=()=>{
    usersData.forEach((elem)=>{
        user.innerHTML += `<div class="cards">
                <img id="img" src="${elem.url}" alt="image">
            <div class="text">
                <h3 id="cardName">Name : ${elem.name} </h3>
                <p id="cardBio">Bio : ${elem.bio} </p>
            </div>
        </div>`
    })
}

ui( )

form.addEventListener('submit', (events) => {
    events.preventDefault()

    console.log(name.value)
    console.log(bio.value)
    console.log(url.value)

    const naam = (name.value)
    const photo = url.value
    const bioo = bio.value

    // if (name.value === "" || email.value === "" || url.value === "") return;

    user.innerHTML += `<div class="cards">
                <div class="img-box"> 
                 <img id="img" src="${photo}" alt="image"></div>
            <div class="text">
                <h3 id="cardName">Name : ${naam} </h3>
                <p id="cardBio">Bio : ${bioo} </p>
            </div>
        </div>`


    form.reset()


})

