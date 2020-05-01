const request = require('request');

const forecast = (longitude, latitude, callback) => {
//darksky
const url = 'https://api.darksky.net/forecast/2b686b856043277bf45c9970b1090722/' + latitude + ',' + longitude
request({url: url, json: true},(error, response)=>{
  if (error) {
    callback('Unable to contact darksky for weather report', undefined);
  } else if (response.body.error){
    console.log(response.body.error)
    callback('Unable to find the location', undefined);

  } else {

    //console.log('forcast.js after successfully ')
    console.log(response.body)

    callback(undefined, {
        temperature: response.body.currently.temperature,
        precipProbability: response.body.currently.precipProbability,
        summary: response.body.currently.summary,
        timezone: response.body.timezone,
        visibility: response.body.currently.visibility,
        ozone: response.body.currently.ozone
    })

    
  };

});
}
module.exports = forecast