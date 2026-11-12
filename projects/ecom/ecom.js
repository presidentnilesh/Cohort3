const create = document.querySelector('#create')
const productForm = document.querySelector('.form')
// const createBtn = document.querySelector('#createBtn')
const form = document.querySelector('form')
const close = document.querySelector('#cross')
const productCard = document.querySelector(".product")


let productName, discription, price, image;
let updateIndex = null;

let prodctArr = [
    {
        productName: "Nike Air T-Shirt",
        discription: "Premium cotton oversized T-shirt for everyday wear.",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
        productName: "Classic White Sneakers",
        discription: "Comfortable and stylish sneakers for casual outings.",
        price: 1499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        productName: "Smart Watch",
        discription: "Modern smartwatch with fitness tracking features.",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        productName: "Leather Backpack",
        discription: "Spacious backpack suitable for college and travel.",
        price: 1299,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },
    {
        productName: "Wireless Headphones",
        discription: "High-quality wireless headphones with clear sound.",
        price: 1999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
]

create.addEventListener('click', () => {
    productForm.style.display = 'flex'
})
close.addEventListener('click', () => {
    productForm.style.display = 'none'
})

const ui = () => {
    productCard.innerHTML = "" 
    prodctArr.forEach((elem,index) => {
        productCard.innerHTML += ` <div class="product-card">
                <div class="img">
                    <img src="${elem.image}" alt="shoes image">
                </div>
                <div class="text">
                    <h3>Name : <span>${elem.productName}</span></h3>
                <p><b>Dscription :</b> <span>${elem.discription}</span></p>
                    <p>Price : ${elem.price}</p>
                </div>
                <div class="btn">
                    <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
                    <button onclick="delCard(${index})" id="delete">Delete</button>
                </div>
            </div>`
    })
}

ui()
productForm.addEventListener('submit', (event) => {    // here we are not using button because butto n only click , it doesnot store any data 

    event.preventDefault()

    productName = event.target[0].value
    discription = event.target[1].value
    price = event.target[2].value
    image = event.target[3].value

    if (productName.trim() === "" || discription.trim() === "" || price === "" || image === "") {
        alert("please fill the given details")
        return
    };

    let obj = {
        productName,
        discription,
        price,
        image
    }

    if(updateIndex != null){
        prodctArr[updateIndex] = obj
        updateIndex = null
    }else{
        prodctArr.push(obj)
    }

    ui()
    form.reset()
    productForm.style.display = 'none'

    console.log(prodctArr)

})

const updateProduct = (name)=>{
    productForm.style.display = 'flex'
    let product = prodctArr.find((elem)=>elem.productName===name)
    updateIndex = prodctArr.findIndex((elem)=>elem.productName===name)

    // console.log(product)

    form[0].value = product.productName
    form[1].value = product.discription
    form[2].value = product.price
    form[3].value = product.image
}


let delCard = (index)=>{
    prodctArr.splice(index,1)
    ui()
}