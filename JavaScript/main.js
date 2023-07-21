console.log("This is a log")
console.warn("This is a warning")
console.error("This is an error")


// Ways to print in js :
console.log("Good Morning")
console.log('Good afternoon')

//Data Tpyes :
//1.Primitive Data Type:
// 1.Number
variable_one = 1000004334;
console.log(variable_one);
console.log(typeof(variable_one));

// 2.String :-> '' ; " "; ``
variable_one = 'Welcome to js';
console.log(variable_one);
console.log(typeof(variable_one));

// 3.boolean
variable_two = false
console.log(variable_two)
console.log(typeof(variable_two));

//4.Null
variable_Three = null
console.log(variable_Three);
console.log(typeof(variable_Three)); //object ->This is mistake

//5.undefined
variable_four = undefined
console.log(variable_four);
console.log(typeof(variable_four));

// 

//conditonal statements
//ES5
demo = 10
if (demo >= 0) {
    console.log(demo + " is a +ve number")
} else {
    console.log(demo + " is a -ve number")
}

// ES6 Syntax 
// condition ? TRUE : FALSE
// Limitiation :- TRUE / FALSE statements one-liner statements
demo2 = -10
demo2 >= 0 ? console.log(`${demo2} is a +ve number`) : console.log(`${demo2} is a -ve number`)

flag = true
if (flag) {
    // let a=100
    let a
    a = 100;
    var b = 200
    console.log(a)
    console.log(b)

    console.log(`The value of a inside if-block is ${a}`)

    const c = 300; //both private and public
    console.log(c)

} else {
    b = 500
}
// console.log(c)

//Loops:-
//for loop ,while loop
for (let i = 0; i < 5; i++) {
    console.log(i)
}
let i = 0;
while (i < 6) {
    console.log(i)
    i += 1
}
//NON -PRIMITIVE DATA TYPE
//1.Arrays:-contiguous , [] :represent arrays,no upperbound,
//ways :
// 1
let number = [10, 20, 30, 40, 50]
console.log(number)

// for (let i = 0; i < number.length; i += 1) {
//     console.log(number[i])
// }

//2.
let arr = []
console.log(arr)

//3.
let arrObj = new Array(10)
console.log(arrObj)

console.log(typeof(number));
console.log(typeof(arr));
console.log(typeof(arrObj));

//Arrays Methods :
number.push(600)
console.log(number);

let myArr1 = [100, 200, 300, 400, 50]
    // let myArr2 = myArr1//copies memory location of myArr1 to myArr2
console.log(myArr1) //100, 200, 300,400, 50

//Array Spread Operators---> copy the content only
// let <newArrayName> = [...<ArrayName>]

let myArr2 = [...myArr1]
myArr1.push(-10)
myArr2.push(786)
console.log(myArr1);
console.log(myArr2);

// pop() 
myArr1.pop()
console.log(myArr1)

//shift()
let deletedElement = myArr1.shift()
console.log(myArr1)

//unshift()
let newLength = myArr1.unshift(50);
console.log(newLength) // 5
console.log(myArr1)

//concat()
let num1 = [10, 20, 30, 40]
let num2 = [100, 200, 300, 400, 500]
let combinedArray = num2.concat(num1);
console.log(combinedArray) // 

let dummyArray = [10, "String", true, null, undefined, []]
console.log(dummyArray)