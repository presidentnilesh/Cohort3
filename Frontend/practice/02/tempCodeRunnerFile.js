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