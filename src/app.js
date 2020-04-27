//nodejs needs to be downloaded and run on the computer
// Start nodemon with this syntax nodemon src/app.js -e js,hbs
// in the project root directory ~/expresswebserver/
// the path library is a node js library and is defined in the node.js document

const path = require('path')

// From the project directory ../expressWebServer
// In the project directory ../expressWebServer initialize npm  use the npm init -y command and syntax

// npm init -y

// The result of this is the package.json library in the project directory  ../expressWebServer
// In the project directory ../expressWebServer run the npm i express this will be used to install the express libruary
// and create a webserver 

// npm i express

// The express lib exposes a single function 'express'
const express = require('express')


// load the handle bars application hbs it will be usedprocess html pages and add functionality

const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Call the express function

const app = express()
// used to support the heroku port number
const port = process.env.PORT || 3000

console.log('This is the __dirname ' + __dirname)
console.log('This is the __filename ' + __filename)

// define paths for express config
//the handle bars libruary that processes the html like filr uses the./expresswayWebServer/templates/views
// to contain the .html based .hbs files the handle bar files.
const publicViewsDir = path.join(__dirname,'../templates/views')
console.log('The default views dir is changed to templates ' + publicViewsDir)


const publicDirPath = path.join(__dirname, '../public')
console.log('The path to the public directory ' + publicDirPath)

const publicPartialPath = path.join(__dirname, '../templates/partials')
console.log ('The directory to the partial handlebar templates is ' + publicPartialPath)


// app.set() is used to get handle bars  (npm i hbs) associated with express
app.set('view engine', 'hbs')
app.set('views', publicViewsDir)


// see the readme file for problems with this command.
hbs.registerPartials(publicPartialPath)


// The express function has a get method the get method has two parameters request and response

//line 24 gave an error because there was spurious single quote be mindful this error wasted time and now I 
// write about it and will study it wasting more time

// the app.get ('', (req, res))  is called when the app.com set (what???)is requested.

// app.use will customize the express server to change the root dir the root dir will run index.html
// handle bars has super seceeded index.htlm but still expects  /css, /img, and /js to be 
//found there


app.use(express.static(publicDirPath))

/*
This section was superseeded when handle bars was used the templates dir is the basis was the web page rendering
// set up the path to run the help file
const helpPublicFilePath = path.join(__dirname, '../public/help.html')

console.log(helpPublicFilePath)
app.use(express.static(helpPublicFilePath))
// set up the path to run the about.html file
const aboutPublicFilePath = path.join(__dirname, '../public/about.html')

console.log(aboutPublicFilePath)
app.use(express.static(aboutPublicFilePath))
*/

// app.com               root
// app.com/help
// app.com/about
// app.com/Weather
/*
app.get('', (req, res) => {

        res.send('<h1>Hello express</h1>')


})

app.get('/help', (req, res) => {

    res.send([{
        pageName: 'Help Page',
        purpose: 'send back a JSON object to the browser',
        pageDate: '04/14/2020'
    },
    { 
        pageName: 'Second Page',
        purpose: 'send back a JSON Array of objects to the browser',
        pageDate: '04/14/2020'
    }    
])


})

app.get('/about', (req, res) => {

    res.send('About Page')


})
*/
//This is the hbs page processing system
//get the express root /templates/views/index.hbs page
app.get('',(req,res) => {

    res.render('index', {
        title: 'Weather App',
        name: 'Dan Walker',
        footer: 'Created by '
    })

})

app.get('/about',(req, res) => {
    res.render('about',{
        title: 'About HBS',
        name: 'Dan Walker',
        footer: 'Created by '
    })
})

app.get('/help',(req, res) => {
    res.render('help',{
        title: 'Help HBS',
        name: 'Dan Walker',
        footer: 'Created by ',
        
    })
})

app.get('/weather', (req, res) => {

    console.log('&&&&& The address from the URL is ' + req.query.address + '  This looked good 20200417.')

    if(!req.query.address){
        return res.send({
            error: 'Please provide an address. ~/weather?address=denver'
        })

    }

 
    geocode(req.query.address,(error,{latitude, longitude, location} = {} ) => {
        console.log(error)
        if(error){
            //return console.log('Error GEOCode Failed ', error)
            return res.send({error})
        }
    
        
        forecast(longitude, latitude, (error, forecastdata) => {
        if(error){
            return res.send({error})
        }

        res.send({
            location: location,
            temperature: forecastdata.temperature,
            precipProbability: forecastdata.precipProbability,
            forecast: forecastdata.summary,
            weathererror: error 
            })
        })
    })
    
})
// these app.get are called Express Route Handler
// request route handler

app.get('/products', (req, res) => {
    
    console.log('This is the Request ' + JSON.stringify( req.query))
    console.log('This is the search ', + req.query.search)
    // to take this branch I need this URL in the browser
    // localhost:3000/products/
    // without the final slash the I got undefined returned.
    if(!req.query.search){
        res.send({
            error: ' A serch term must be provided like, products?search=games&rating=M '
        })
    } else {
        res.send({
            products: [],
            searchkey: 'localhost:3000/products?search=games&rating=M'
        })
    }
 
 })



// 404 No Found Error related to /help
app.get('/help/*', (req, res) => {

    //res.send('Help article not found My 404 Page.')
    res.render('404',{
        title: '404 Page Not Found, ',
        name: 'Dan Walker',
        footer: 'Created by ',
        errmsg: '404 The help file sought is not found.'
        
    })
})

//use the 404 page
app.get('*', (req, res) => {

   // res.send('My 404 Page.')
    res.render('404',{
        title: '404 Page Not Found',
        name: 'Dan Walker',
        footer: 'Created by ',
        errormsg:'404 Page Not Found'
        
    })
})



// dev port 3000

app.listen(port, () => {

    console.log('Server is up on port' + port)
})


