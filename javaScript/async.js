// setTimeout(() => {
//     console.log('kaishe ho aap ?' )
// }, 2000);


// setTimeout(() => {
//     console.log("this is the first demo")
// }, 3000);
// setTimeout(() => {
//     console.log("this is the third demo")
// }, 3000);
// setTimeout(() => {
//     console.log("this is the second demo")
// }, 3000);


// var int = setInterval(() => {   // it is use to run the code after 1000 milisecond till infinity
//     console.log("interval...")
// }, 1000);

// setTimeout(() => {
//     clearInterval(int)      // it is use to clear/stop the interval that ius running
// }, 5000);                   // code execute after 5000 milisecond 


        //FETCH

//  async function dataLao(){
//     var response = await fetch('https://picsum.photos/v2/list')
//     let data  = await response.json()
//     console.log(data)

// }   
// dataLao()


        //making promise by ourself -> synchronous promise

// let p1 = new Promise(function(resolve,reject){
//     let val = false 
//     if ( val){
//         console.log("Success")
//     }
//     else {
//         console.log("failure" )
//     }
// })

        //making async promise

        // dummy 

// var p2 = new Promise(function(response,reject){
//     console.log("Response pending ....")
//     var result = true
//     setTimeout(() => {
//         if(result){
//             console.log("value true ")
//             response()  // by this the response will be invoked
//         }else{
//             console.log("value false")
//             reject()    // by this the rejected will be invoked
//         }
//     }, 4000);
// })

// p2.then(function(){     // .then means what will happend/run when the response is run .
//     console.log("primise id fulfilled .")
// })
// .catch(function(){      // cathch run when their is some error or issue in the promise
//     console.log("Promis3 rejected ")
// })
// .finally(function(){    // it run whether promise is true of false 
//     console.log("finished ")    
// })



        // a promise for ordering food 

let odeer = new Promise(function(resolve,reject){
    console.log("Food order ho gaya")
    var statuss = true
    setTimeout(function(){
        if(statuss){
            console.log("Order aa gaya.")
            resolve()
        }else{
            console.log("Order has been cancel by the saller .")
            reject()
        }
    },3000)
})

odeer.then(function(res,rej){      // when promise satisfies  -> we can dorectly write .then
    setTimeout(() => {
        console.log("Please pay the bill")

        let paymentStatus = true 
        setTimeout(() => {
            if(paymentStatus){
                console.log("Payment Done...")
                res()
            }else{
                console.log("Payment Failed...")
                rej()
            }
        }, 6000);
    }, 5000);
})
.catch(function(){  // when promise fails  -> we can dorectly write .catch
    setTimeout(() => {
        console.log("sorry for the issue you face.")
    }, 5500);
})
.finally(function(){    // evertime promise runs -> we can dorectly write .finally
    setTimeout(() => {
        console.log("Thanks.")
    }, 7000);
})