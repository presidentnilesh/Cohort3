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


    //deleting of task
todoList.addEventListener('click', (e)=>{
    console.log(e.target)   // it return the elment that was clicked
    if(e.target.classList.contains('del')){
        e.target.parentElement.parentElement.remove()       //parentElement means -if we say parentelement of del , it means the parent of del is id-last as it is the parent of del . similarly class-li is the parent of last 
    }
})


//i am unable to make the edit button functional

edit.addEventListener('click', (e)=>{   
    console.log(e.target)
    if(e.target.classList.contains('edit')){
        let createTAsk = e.target.parentElement.parentElement ;
        inp.value = createTAsk.querySelector('h3').textContent
        inp.focus()
    }
})