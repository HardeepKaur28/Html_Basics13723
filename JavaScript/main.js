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
//1.Arrays:-Collection of object in js ,contiguous , [] :represent arrays,no upperbound,
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

//Arrays Methods :Dynamic arrays
// Property :1.
Array.length
number.push(600)
console.log(number);

let myArr1 = [100, 200, 300, 400, 50]
    // let myArr2 = myArr1//copies memory location of myArr1 to myArr2 this is reason for caalling arraaysa a refence varible

console.log(myArr1) //100, 200, 300,400, 50

//Array Spread Operators---> copy the content only
// let <newArrayName> = [...<ArrayName>]

let myArr2 = [...myArr1]
myArr1.push(-10)
myArr2.push(786)
console.log(myArr1);
console.log(myArr2);

//1. pop() 
myArr1.pop()
console.log(myArr1)

//2.shift()
let deletedElement = myArr1.shift()
console.log(myArr1)

//3.unshift()
let newLength = myArr1.unshift(50);
console.log(newLength) // 5
console.log(myArr1)

//4.concat()
//concate 2 Arrays
let num1 = [10, 20, 30, 40, 50]
let num2 = [100, 200, 300, 400, 500]
let combinedArray = num2.concat(num1);
console.log(combinedArray)

// concate 3 Arrays:
let num3 = [1, 2, 3, 4, 5]
let combined3Arrays = num3.concat(num1, num2)
console.log(combined3Arrays)



let dummyArray = [10, "String", true, null, undefined, []]
console.log(dummyArray)

//2D-Array :[]->Decided no. of rows and Data inside [] decided the no. of columns
let twoDArray = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]
console.log(twoDArray)
console.log(twoDArray[1][1]) //to print a specific memory location element

let twoDArray1 = [
    [],
    [],
    []
]
console.log(twoDArray1)

//2. Js OBJECT:- { }
// let myObj = {key1:value1, key2: value2 ..}
let myObj = {
    name: 'hardeep',
    email: 'hardeep@gmail.com',
    password: 123456,
    hobbies: ['music', ' Reading', 'Playing'],
    isEmployed: true,
    address: {
        street: 'Street -1',
        city: "Kharar",
        state: 'Punjab',
        s: [1234, 5678]
    }

}

let myObj1 = new Object()
myObj.name = 'User One'
myObj.email = 'userone@service.com'
myObj.password = 'examplepwd'
myObj.isEmployed = true
myObj.hobbies = ['Music', 'Reading Books', 'Travelling']
myObj.address = {
    street: 'Street - 1',
    city: 'Kharar',
    state: 'Punjab',
    pincodes: [1234, 5678]
}
console.log(myObj1)

// 3. Array of Objects :- [ {}, {}, {} ]
const users = [{
        name: 'User One',
        email: 'userone@service.com',
        password: 'examplepwd',
        isEmployed: true,
        hobbies: ['Music', 'Reading Books', 'Travelling'],
        address: {
            street: 'Street - 1',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    }, // users[0].password ; users[0].address.pincodes[0]
    {
        name: 'User Two',
        email: 'usertwo@service.com',
        password: 'examplepwd2',
        isEmployed: false,
        hobbies: ['Music', 'Travelling'],
        address: {
            street: 'Street - 2',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    },
    {
        name: 'User Three',
        email: 'userthree@service.com',
        password: 'examplepwd3',
        isEmployed: true,
        hobbies: ['Reading Books', 'Travelling'],
        address: {
            street: 'Street - 3',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    }
]
console.log(users)

// 4. JSON (JavaScript Object Notation)
// JS -> interface -> JSON -> 2 functions.

// 1. stringify() -> AoO to JSON
const myJSONResponse = JSON.stringify(users);
console.log(myJSONResponse)

// 2. parse() -> JSON to AoO
const convertAoO = JSON.parse(myJSONResponse)
console.log(convertAoO)
    //js object -orinted pro
    //api.github.com/user/name
    //Dom