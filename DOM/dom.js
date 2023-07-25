// DOM -> Document  Object Model

// console.dir(document)
// console.log(document.URL)
// console.log(document.all)
// console.log(document.all[19])

// let listItem = (document.all[19]);
// console.log(listItem)


// const myHeading = document.all[4];
// document.all[4].textContent = "Welcome to DOM"
// console.log(myHeading)

//Identifier Method ------------->
// 1. getElementById ->
// let myHeader = document.getElementById('header-title')/by id name only
//console.log(myHeader)

// 2. getElementsByClassName ->
//let listItem = document.getElementsByClassName('list-group-item')//by class name only
//console.log(listItem)

//3. getElementsByTagName ->
//const myForms = document.getElementsByTagName('form')// by tag name only
//console.log(myForms)

//4.  querySelector ->
// let myHeader = document.querySelector('#header-title')//all in one //pro. only first selector is return by
// console.log(myHeader)

// let listItem = document.querySelector('.list-group-item')
// console.log(listItem)

// const myForms = document.querySelector('form')
// console.log(myForms)

//5. querySelectorAll ->

// let listItem = document.querySelectorAll('.list-group-item')
// console.log(listItem)

//DOM MANIPULATION METHOD : tochange in run time ----------->
//let heading = document.querySelector('#header-title')

//1.textContent ->
// heading.textContent = 'Welcome to DOM' 

//2.innerHTML ->
//heading.innerHTML = '<h2>Welcome to DOM </h2>'
document.querySelector('#my-div').innerHTML = "<p>Hello...</p>"

// NOTE :- textContent & innerHTML both works the different way,
// textContent changes the text b/w <> & </> while innerHTML adds a child to the given element


//CSS With Js (.style)------------------------------>

const secondHeading = document.querySelector('#second-heading')
    //secondHeading.style.backgroundColor = 'purple'


// JS Function -  setTimeOut()
// Syntax -> setTimeOut( callfn, timeoutDelay (in ms) )
setTimeout(() => {
    secondHeading.style.backgroundColor = 'purple'
    secondHeading.style.color = 'white'
    secondHeading.style.padding = '10px'
    secondHeading.style.textAlign = 'center'
}, 3000)

setTimeout(() => {
    heading.innerHTML = "<h2>Welocme to DOM</h2>"
}, 5000)

//Events ->