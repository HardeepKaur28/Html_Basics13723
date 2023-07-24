// DOM -> Document  Object Model

console.dir(document)
console.log(document.URL)
console.log(document.all)

const myHeading = document.all[4];
document.all[4].textContent = "Welcome to DOM"
console.log(myHeading)

// qus. for higher order arrays methods<!-- find  id all the employes des. from spending years min. 6 years -->