
//console.log('Client Side JavaScript file is loaded!')

//form is the index.hbs html element that we are working with.
const weatherForm = document.querySelector('form')

// this is an event listner for the submit event
const search = document.querySelector('input')

// select the <p> </p> to use for the messages
// querySelector will bring back the first element of the name

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageSeven = document.querySelector('#message-7')

//messageOne.textContent = 'My dog has flees.'

//Clear all the values

messageOne.textContent = ''
messageTwo.textContent = ''
messageThree.textContent = ''
messageFour.textContent = ''
messageFive.textContent = ''
messageSix.textContent = ''
messageSeven.textContent = '' 

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value
    //console.log(location)
    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''
    messageSix.textContent = ''
    messageSeven.textContent = ''       

    
// fetch data from the server side to the UI browser based API
// fetch is not accessable in node.js

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            //console.log(data)
            if(data.error) {
                //console.log('public\\src\\app.js output error ' + data.error)

                messageOne.textContent = data.error
                messageTwo.textContent = ''
                messageThree.textContent = ''
                messageFour.textContent = ''
                messageFive.textContent = ''
                messageSix.textContent = ''
                messageSeven.textContent = ''       
            
               } else {
                   //console.log('public\\src\\app.js output location ' + data.location)
                   //console.log('public\\src\\app.js output forecast ' + data.forecast)
                   //console.log('public\\src\\app.js output temperature ' + data.temperature)
                   //console.log('public\\src\\app.js output Precipitation % ' + data.precipProbability)
                messageOne.textContent = '\public\\src\\app.js output location ' + data.location
                messageTwo.textContent = 'public\\src\\app.js output forecast ' + data.forecast
                messageThree.textContent = 'public\\src\\app.js output temperature ' + data.temperature
                messageFour.textContent = 'public\\src\\app.js output Precipitation % ' + data.precipProbability
                messageFive.textContent = 'public\\src\\app.js output timezone % ' + data.timezone
                messageSix.textContent = 'public\\src\\app.js output visibility % ' + data.visibility
                messageSeven.textContent = 'public\\src\\app.js output ozone % ' + data.ozone     
            
            }
        })
    })

})

