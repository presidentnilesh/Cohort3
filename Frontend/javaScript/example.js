let papa = {
    fname : "Shailendra",
    lname :  "Kumar",
    property : 10
}

var beta = {
    fname : "Nilesh" , 
    lname :"Kumar",
    age : 23
}

beta.__proto__ = papa   // we ware setting the protptype of beta with papa

console.log(beta.property)