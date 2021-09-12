import { getWeather } from "./weather.js";

const isProduction = true;

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
  
export function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    getWeather(crd.latitude, crd.longitude);

    
}
  
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

let GetGeoLocationData = () => {

    navigator.geolocation.getCurrentPosition(success, error, options);

    setTimeout(GetGeoLocationData, 300000)

}

let Init = () => {
    if (isProduction) {
        GetGeoLocationData();
    }
}

Init();