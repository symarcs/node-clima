const axios = require('axios');

const getClima = async(latitud, longitud) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=fa0a52e83336fd98c19bad6363a936cb&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}