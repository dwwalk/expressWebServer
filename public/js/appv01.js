// fetch data from the server side to the UI browser based API
// fetch is not accessable in node.js

console.log('Client Side JavaScript file is loaded!')

fetch('http://localhost:3000/weather?address=denver').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log('this is public/app.js getting data for the screen Loca' + data.loc)
            console.log('this is public/app.js getting data for the screen Loca' + data.forcast)
        }
    })
})
/*
const weatherForm = document.querySelector('form')
const saerch = donument.querySelector('input')


weatherForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    const location = saerch.value
    console.log(location)
})
*/
