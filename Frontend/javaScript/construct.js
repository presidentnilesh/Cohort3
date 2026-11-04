// class User {
//     constructor(fname,lname,phone){
//         this.fname = fname;
//         this.lname= lname;
//         this.phone = phone
//     }
// }   

// class Admin extends User{
//     constructor(fname,lname,age){
//         super(fname,lname,)
//         this.age = age
//     }
// }
// let u1 = new User( "Uttam","kumar",478467867482)
// var u2 = new Admin("Anand" , "kumar" , 34)

// console.log(u1)
// console.log(u2)

        //exapmle 3 
// class User  {
//     constructor(fname,lname,phone){
//         this.fname = fname
//         this.lname = lname
//         this.phone = phone
//     }
//     greet(){
//         console.log("welcome" , this.fname)
//     }
// }

// class Admin extends User {
//     constructor(fname,lname,phone,isverified){
//         super(fname,lname,phone)
//         this.isverified = isverified
//     }
// }

// let u2 = new Admin("UTTAm","kumar",48942834,true)
// let u1 = new User("Nilesh","Kumar" ,2345457433)

// console.log(u1)
// console.log(u2)

// u2.greet()


        // just a simple class with constructor

class User {
    constructor(fname,lname){
        this.fname= fname
        this.lname=lname
    }
}
let u1 = new User("nilesh","Kumar")
console.log(u1)