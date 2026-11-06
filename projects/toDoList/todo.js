const inp = document.querySelector('input')
const btn = document.querySelector('#ad')

const del = document.querySelector('.del')
const edit = document.querySelector('.edit')
const todoList = document.querySelector('.to-do-list')

btn.addEventListener('click',()=>{
    let value = inp.value
    if(value.trim() === "") return ; // when the input is blank then new blank task will nor create 
    // return is used as we know , js doesnot execiute the code written after return 

    todoList.innerHTML += `<div class="li">
                <h3>${value}</h3>
                <div id="last">
                    <button class="btn edit">Edit</button>
                    <button class="btn del">Delete</button>
                </div>
            </div>`

    inp.value = ""
})

