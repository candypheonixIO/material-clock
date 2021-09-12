const weatherKey = 'e5878f0d8e2ff0250b3046c5349e0b2e';

export let getWeather = (lat, lon) => {

    // This will be called by 'geolocation.js' when it grabs reletive location data.

    const httpRequest = new XMLHttpRequest();

    httpRequest.onload = () => {

        // Process weather api responce...

        if( httpRequest.readyState === XMLHttpRequest.DONE )
        {
            const response = httpRequest.responseText;

            // 200
            console.log( response );

            let json = JSON.parse( response );

            // 'Compile' json response.
            let weatherDesc = json.weather[0].description;
            let temperature = Math.round(json.main.temp);
            let tempFeelsLike = Math.round(json.main.feels_like);
            let city = json.name;

            // Render 'compiled' json response.
            document.getElementById('weather__description').innerHTML = weatherDesc;
            document.getElementById('temp').innerHTML = temperature;
            document.getElementById('feels__like').innerHTML = tempFeelsLike;
            document.getElementById('city').innerHTML = city;

        }
        else
        {

            // Not ready.
            
        }

    }

    httpRequest.open(

        'GET',
        'https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid='+ weatherKey +'&units=metric',
        true

    );

    httpRequest.send();

}