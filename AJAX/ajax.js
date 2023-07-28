// //AJAX:Asynchronous javascript and XML
// //AJAX:- a technique to integrate an API to a FE 
// //ajax-->is a side effect-->which takes time to a FE application
// //xml->helps to contact ot server

// // Step1 - Create an object at XMLHttpRequest()
// const xhr = new XMLHttpRequest()
// const url = 'https://api:github.com/users'

// //ready state =0
// //steps2:open the portal of communication b/w client and server
// // endpoint -server url from which we fetch data
// xhr.open('GET', url)

// //ready state =1

// //3.perform an action over request state change

// xhr.onreadystatechange = () => { //readystate waite kr rha ha sttate chnage hone ka/
//     //200 staus check means ok

//     if (xhr.readyState == 4 && xhr.status == 200) {
//         // I Will get the respo


//         //send the request
//     }
// }

//------------------------------->


// Aysynchronous JavaScript And XML
// AJAX :- A technique to integrate an API to a FE application

// Step1 - Create an object of XMLHttpRequest()
const xhr = new XMLHttpRequest();
const url = `https://api.github.com/users`
console.log(`First readyState -> ${xhr.readyState}`)
    // Step2 - Open the portal of communication b/w client & server
xhr.open('GET', url)
console.log(`Second readyState -> ${xhr.readyState}`)
    // readyState = 1
    // StepX - Set your request headers -> setRequestHeaders
    // Step3 - Perform an action over request state change
xhr.onreadystatechange = () => {
    console.log(`Remaining readyState -> ${xhr.readyState}`)
        // readyState = 2 -> 3 -> 4
    if (xhr.readyState == 4 && xhr.status == 200) {
        // I will get the response from the server -> responseText
        const jsonRes = xhr.responseText
        const res = JSON.parse(jsonRes)
            //  console.log(res)

        // const userImg = document.createElement('img')
        // userImg.setAttribute('src', res[0].avatar_url)
        // console.log(userImg)

        // const userName = document.createElement('h4')
        // console.log(userName.textContent = res[0].login)
        // console.log(userName)

        // const output = " "
        //     //P1->res[0].id | p2 ->res[0].avatar.url

        // for (let i; i < res.length; i++) {
        //     output +=
        //         `div>
        // <imag src="${res[i].avatar_url}" />
        // <p class="lead">"${res[i].login}"</p>
        //      </div>`

        // }


        // document.getElementById('my-Div').innerHTML = output
        // console.log(output)


        let output = ''
            // p1 -> res[0].login | p2 -> res[0].avatar_url
        for (let i = 0; i < res.length; i++) {
            output += `
                <div>
                    <img src="${res[i].avatar_url}" /> <br />
                    <p class="lead">${res[i].login}</p>
                </div>
            `
        }
        console.log(output)
        document.getElementById('my-Div').innerHTML = output
    }
}

xhr.send()