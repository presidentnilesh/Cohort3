const btn = document.querySelector('button')
const name = document.querySelector('#name')
const bio = document.querySelector('#bio')
const url = document.querySelector('#url')
const main = document.querySelector('main')
const form = document.querySelector('form')
const user = document.querySelector('.user')




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
                <img id="img" src="${photo}" alt="image">
            <div class="text">
                <h3 id="cardName">Name : ${naam} </h3>
                <p id="cardBio">Bio : ${bioo} </p>
            </div>
        </div>`


    form.reset()


})

