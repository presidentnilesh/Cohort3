    //question 1 -> to find price greater then 300
// var arr = [450,100,250,150,700]

// var arr2 = arr.filter((number) => number>300)   // this is known as itterative method 

// console.log(arr2)

    // question 2 -> to calculate average of all marks
    //this is wrong 
// let marks = [80,90,70,85,95]
// let x= 0 ;
// let avg = marks.map(function(x){
//     t=  m +x
//     x=t
// })

// console.log(avg/marks.length)

//right way to solve
// let marks = [80,90,70,95,60]

// let total = marks.reduce((sum,mark)=> sum+mark , 0)
// let avg = total/marks.length

// console.log(avg)

        //Most Frequent Number
let number = [ 5,1,2,7,3,9,1,1,2,5]
let count = {}

for( var i in number){
    num = number[i]
    if(count[num]){
        count[num]= count[num]+1
    }
    else {
        count[num]= 1
    }
}

let frequency = 0 
let maxfrequent ;

for( let key in count ){
    if(count[key] > frequency){
        frequency = count[key]
        maxfrequent = key
    }
}

console.log("number is "+maxfrequent, "and it repeats",frequency,"times")