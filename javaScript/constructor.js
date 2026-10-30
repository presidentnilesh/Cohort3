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

class MakeStudent {
    constructor (fname , lname , phone , isVerified){
        this.fname = fname ;
        this.lname = lname;
        this.phone= phone;
        this.verified = isVerified
    }
    showProfile = function(){
        if(this.isVerified){
            console.log(`Student name is ${fname} ${lname} and his phone number is : ${phone} .`)
        }
        else {
            console.log("The user is not verified .")
        }
    }
}

var s1 = new MakeStudent("Nilesh" , "Kumar" , 378978478 , true)
var s2 = new MakeStudent("KAnishk" , "Kumar" , 237899452 , false)

console.log(s1)

// MakeStudent.showProfile()