
/*S EXERCISES

        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values*/
     
        //21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        let x = 'John'
        let y = 'Doe'
       console.log(`${x} <> ${y}`)

       //22) Create an object with properties such name, surname, email
       
       let studentOfStrive = {
        name : 'Aizada',
        surname : 'Nazarova',
        emailAddress : 'nazarovaaizada1@gmail.com',
    }
     
    //23) Delete Email from the previously created object
    
    delete studentOfStrive.emailAddress
console.log(studentOfStrive)

//24) Create an array with 10 strings in it
// 25) Print in the console every string in the previous array

let anArr = ['Aizada', 'Kuzia', 'Nurs', 'Anna', 'Roger', 'Anne', 'Dima', 'Konia', 'Nura', 'Aikanish']
console.log(anArr)

// 26) Create an array with 100 random numbers in it
let newArr = [Math.floor(Math.random()*100)+1]
console.log(newArr)

//27) Wrote a function to get the MAX and the MIN from the previously created array

const newMax = function (n) {
    let max1 = (n * (Math.max - Math.min + 1) + Math.min)
   // let min1 = Math.min(newArr)
    
} 
console.log(newMax(newArr))
//28) Create an array of arrays, in which every array has 10 random numbers
let arrInArr = []
for (let i=0; i<10; i++){
    //let newCrArr = [] 
    //for (let x=0; x<10; x++){
      //  newCrArr(x).push(Math.floor(Math.random()*10)+1)
    }

let tenArr = []
    for (let x=0; x<10; x++){
        tenArr[x]
    } 
    
    


//29) Create a function that gets 2 arrays and returns the longest one
const aiz = function(){
    let longAr = [2, 3, 3,8,5, 6,]
    let shortAr = [1, 2, 3,]
    if (longAr.length > shortAr.length) {
       return longAr
    }
} 
console.log(aiz())
//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values*/
