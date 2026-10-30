// function Books(bookName , pages ,journa){
//     this.bookName = bookName
//     this.pages = pages
//     this.journa = journa
//     this.slogan = function(){
//         console.log("Book Name is " , this.bookName)
//         console.log("Book pages is " , this.pages)
//         console.log("Book journa is " , this.journa)
//     }
// }

// let book1 = new Books("goodan" , 345 , "fantasy")
// let book2 = new Books("sanjay" , 781 , "Action")
// let book3 = new Books("NAmmo" , 601 , "Old")
// book2.slogan()

        // example 2 

// function Students(fname , lname , phone , age){
//     this.fname = fname ;
//     this.lname = lname;
//     this.phone= phone;
//     this.age = age ;
//     this.showPorfile = function(){
//         console.log(`Student name is ${fname} ${lname} and his phone number is : ${phone} and his age is ${age} .`)
//     }
// }

// let stu1 = new Students("Nilesh", "Kumar" , 248484782 , 23)
// stu1.showPorfile()


        // WAY TO MAKE CONSTRUCTOR AFTER E6 VERISON

// class MakeStudent {
//     constructor (fname , lname , phone , isVerified){
//         this.fname = fname ;
//         this.lname = lname;
//         this.phone= phone;
//         this.verified = isVerified
//     }
//     showProfile = function(){
//         if(this.verified){
//             console.log(`Student name is ${this.fname} ${this.lname} and his phone number is : ${this.phone} .`)
//         }
//         else {
//             console.log("The user is not verified .")
//         }
//     }
// }

// var s1 = new MakeStudent("Nilesh" , "Kumar" , 378978478 ,true)
// var s2 = new MakeStudent("KAnishk" , "Kumar" , 237899452 ,false)

// s1.showProfile()
// s2.showProfile()

// // MakeStudent.showProfile()

        // method 2 


function Students(fname , lname ,contact , isverified){
    this.fname = fname
    this.lname = lname
    this.contact = contact
    this.isverified = isverified
}
let showProfile = function(){
        if(this.isverified){
            console.log(`Student name is ${this.fname} ${this.lname} and his phone number is : ${this.contact} .`)
        }
        else {
            console.log("The user is not verified .")
        }
    }

Students.prototype.company = "sheriyans"        // by this we are making company as the protoype of students , so all student have coampany as sheriyans

Students.prototype.showProfile = showProfile        // in this we set showProfile as the prototype of all Students

let s1 = new Students("Utam" , "Kumar" , 5847395234 , true)
let s2 = new Students("sanjay" , "singh" , 4958245923 , false)
let s3 = new Students("Anand" , "kumar" , 24958723947 , true)
// console.log(s1)

console.log(s1.company)
