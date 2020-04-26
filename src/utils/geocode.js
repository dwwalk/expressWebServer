
const request = require('request');

const geocode = (address, callback)  => {
  
   const url='http://api.weatherstack.com/current?access_key=dd34b3119b06e77068fc5c838b4d04c5&query=' + address +'&units=f'
   //console.log (address)
    request({url:url, json: true},(error, {body} = {}) => {
  
      console.log( error + '    ' + body)
      if(error){
  
        callback('Unable to connect to location services, possible network issue.', undefined)
  
      } else if (body.success != undefined){
  
         callback('Unable to find the location. Try a different location', undefined)
  
      } else {
          //console.log(body)
  
          callback(undefined,{
           latitude: body.location.lat,
           longitude: body.location.lon,
           location: body.location.name 
          })


    }
  })
}
  
module.exports = geocode
