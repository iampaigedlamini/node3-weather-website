const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0d9bce39e6228ba27a5512d9471a952b&query=' + latitude + ',' + longitude + '&units=m'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ '. Visibility is ' +body.current.visibility+ ' km, cloud cover ' +body.current.cloudcover+ '%. It is currently '+body.current.temperature+' degrees celsius out. There is a '+body.current.precip+'% chance of rain. It feels like ' +body.current.feelslike+ ' degress celsius, wind speed ' +body.current.wind_speed+ ' km/h, wind direction ' +body.current.wind_dir[0]+ '.')
        }
    })
}

module.exports = forecast