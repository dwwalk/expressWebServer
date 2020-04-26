console.log({'Client Side JavaScript file is loaded!'})

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) =>{
        console.log(data)
        

    })
})
