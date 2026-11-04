// var response = fetch('https://fakestoreapi.com/products')

// response.then(function(data){
//     console.log("Data aa gaya ...")
//     return data.json()
// })
// .then(function(myData){
//     console.log(myData)
// })
// .catch(function(){
//     console.error("Data nahi aaya , kuch problem hai .")
// })


         // another method to write this 

// fetch('https://fakestoreapi.com/products').then(function(data){
//     console.log("Data aa gaya ...")
//     return data.json()
// })
// .then(function(myData){
//     console.log(myData)
// })
// .catch(function(){
//     console.error("Data nahi aaya , kuch problem hai .")
// })


        //async-await

async function data(){
        try {
            let response = await fetch('https://cakestoreapi.com/products')
            let data2 = await response.json()
            data2.forEach(function(element){
                console.log(element)   
            });
        
        } catch (error) {
            console.log("URL is wrong .")
        }
}

data()