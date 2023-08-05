// DOM -> Document  Object Model

// console.dir(document)
// console.log(document.URL)1111111`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// console.log(document.all)
// console.log(document.all[19])

// let listItem = (document.all[19]);
// console.log(listItem)

//Identifier Method ------------->
// 1. getElementById ->
//let myHeader = document.getElementById('header-title')//by id name only
//console.log(myHeader)

// 2. getElementsByClassName ->
//let listItem = document.getElementsByClassName('list-group-item') //by class name only
//console.log(listItem)

//3. getElementsByTagName ->
//const myForms = document.getElementsByTagName('form')// by tag name only
//console.log(myForms)

// 4. querySelector(id/className/tagName) ->

//let myHeader = document.querySelector('#header-title') //all in one //pro. only first selector is return by
//console.log(myHeader)

//let listItem = document.querySelector('.list-group-item')
//console.log(listItem)

// const myForms = document.querySelector('form')
// console.log(myForms)

//5. querySelectorAll ->

//let listItem = document.querySelectorAll('.list-group-item')
//console.log(listItem)

//DOM MANIPULATION METHOD : tochange in run time ----------->
let heading = document.querySelector('#header-title')

//1.textContent -> text in b/w of the <> and </> of the element
//heading.textContent = 'Welcome to DOM'

//2.innerHTML ->
//heading.innerHTML = '<h2>Welcome to DOM </h2>'
//document.querySelector('#my-div').innerHTML = "<p>Hello...</p>"

// NOTE :- textContent & innerHTML both works the different way,
// textContent changes the text b/w <> & </> while innerHTML adds a child to the given element


//CSS With Js (.style)------------------------------>

// const secondHeading = document.querySelector('#second-heading')
//secondHeading.style.backgroundColor = 'blue'


// JS Function -  setTimeOut()------------------------------>
//Syntax - > setTimeOut(callfn, timeoutDelay( in ms))
// setTimeout(() => {
//     secondHeading.style.backgroundColor = 'purple'
//     secondHeading.style.color = 'white'
//     secondHeading.style.padding = '10px'
//     secondHeading.style.textAlign = 'center'
// }, 3000)

// setTimeout(() => {
//     heading.innerHTML = "<h2>Welcome to DOM</h2>"

// }, 5000)

//const listItems = document.getElementsByClassName('list-group-item')
// for (let i = 0; i < listItems.length; i++) {
//     //EVEN : 1,3,5
//     //ODD :0,2,4
//     if (i % 2 == 0) {
//         listItems[i].style.backgroundColor = "grey"
//     }
// }

//console.log(listItems)
// const listArr = []
// for (let i = 0; listItems.length; i++) {
//     listArr.push(listItems[i])
// }
// console.log(listArr)

// listArr.forEach((item, index) => {
//         if (index % 2 == 0) {
//             listItems[i].style.backgroundColor = "#f4f4f4"
//         }
//     })

//Events  In DOM -------------------------------------------------->
// const mybtn = document.getElementById('btn')
// console.log(mybtn)

//element.addEventListner(EventName ,() => {})
//element.addEventListner(EventName ,FunctionName)

// mybtn.addEventListener('click', () => {
//     console.log('Button was clicked')
// })
// mybtn.addEventListener('dblclick', () => {
//     console.log('BButton was clicked')
// })



// //const bttn = document.getElementById('item-One')
// //bttn.addEventListener('click', () => { console.log('clicked') })

// //document.getElementById('item-Two').addEventListener('dblclick', () => { console.log("item-Two was clicked") })

// //document.getElementById('submitBtn').addEventListener('click', () => { console.log("Hii... JavaScript") })

// //Submit button with parameter
// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     // console.log(e) //--->shows the Event parameter Prop.//paramerter name be anything its stores the meta data of event
//     e.preventDefault() //basically parameter is used in submit button to solve the problem like continuous reloded of pages 
//     console.log("Default Setting of Submit changes")
// })

// document.getElementById('text-input').addEventListener('mouseenter', () => {
//     console.log('Cousrar entered the element')
// })

// document.getElementById('text-input').addEventListener('mouseleave', () => {
//     console.log('Cousrar left the element')
// })

// document.getElementById('text-input').addEventListener('focus', () => {
//     console.log('Cousrar focus ')
// })

// //JS is time bound  and interpreted lang.

// setTimeout( () => {
//     console.log('Callback was executed...')
// }, 3000 )
// console.log('Code after setTimeout')


// //Keyboard Events ------------------------>
// document.getElementById('text-input').addEventListener('copy', () => {
//     console.log('Copy text ')
// })

// document.getElementById('text-input').addEventListener('cut', () => {
//     console.log(' cut text')
// })

// document.getElementById('text-input').addEventListener('paste', () => {
//     console.log('paste text ')
// })

// document.getElementById('text-input').addEventListener('keydown', () => {
//     console.log('key is  Down ')
// })

// document.getElementById('text-input').addEventListener('keyup', () => {
//     console.log('key is up ')
// })

// document.getElementById('text-input').addEventListener('keypress', () => {
//     console.log('Key is Pressed')
// })

// document.getElementById('text-input').addEventListener('keypress', (e) => {

//     console.log(e) //its run time process
//         // console.log(e.target.value) //text values at run time
// })

// ALTERNATIVE

//not at run time but after complete the text typing and then sumbitted by user
// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(document.getElementById('text-input').value)
// })

//Fun Activity
// document.querySelector('#container-box').addEventListener('mouseenter', (e) => {
//     //  console.log(e)
//     document.querySelector('#container-box').style.backgroundColor = `rgb(0,${e.offsetX},${e.offsetY})`
// })

// document.querySelector('#container-box').addEventListener('mouseleave', (e) => {
//     //   console.log(e)
//     document.querySelector('#container-box').style.backgroundColor = `rgb(100,${e.offsetX},${e.offsetY})`
// })

//DOM TRAVERSALS
//1.parentElement
// console.log(document.getElementById('items').parentElement)

// //2.firstChild
// console.log(document.getElementById('items').firstChild)

// //3.firstElementChild
// console.log(document.getElementById('items').firstElementChild)

// //4.lastChild
// console.log(document.getElementById('items').lastChild)

// //5.lastElementChild
// console.log(document.getElementById('items').lastElementChild)

//6/siblings :
// console.log(document.getElementById('head').previousSibling)
// console.log(document.getElementById('head').previousElementSibling)

// console.log(document.getElementById('head').nextSibling)
// console.log(document.getElementById('head').nextElementSibling)

// console.log(document.getElementById('head').nextElementSibling)

// console.log(document.getElementById('second-heading').previousElementSibling)

// //Creating Html using js
// const myDiv = document.createElement('div')
// myDiv.textContent = 'Demo Text'
// myDiv.setAttribute('id', 'my-Div')
// myDiv.setAttribute('class0', 'my-div-class')

// // console.log(myDiv)

// // Adding element to html -appendChild()
// document.getElementById('dummy-div').appendChild(myDiv)

// console.log(myDiv)


// Item Lister Application
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()
    const text = document.getElementById('text-input').value
    const newLi = document.createElement('li')
    newLi.textContent = text
    newLi.setAttribute('class', 'list-group-item')
    document.getElementById('items').appendChild(newLi)
})