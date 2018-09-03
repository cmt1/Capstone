import axios from 'axios';

export const API = axios.create({
    baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = 'e61714a7368b5515f533ab1d9f669db9';
    config.params.units = 'imperial';
    return config;
});
