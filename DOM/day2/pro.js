const bulb = document.querySelector('.bulb')
const but = document.querySelector('button')

let flag = true

// but.addEventListener('click', function(){
//    if (flag){
//     but.style.backgroundColor='green'
//     bulb.style.backgroundColor = 'yellow';
//     but.textContent = "OF "
//     flag = false
// }else{
//     but.style.backgroundColor='red'
//     bulb.style.backgroundColor = 'black';
//     but.textContent = "ON";
//     flag = true 
// }
// })


    /// method 2 - simple and easy 
but.addEventListener('click', function(){
    if(bulb.classList.toggle('lightUp')){   // it gives you true and false 
        but.textContent = "OFF"
        but.style.background='red'
    }
    else{
        but.textContent = 'ON';
        but.style.background='green'

    }
})
