<template>
    <div class="hello">

        <h1>{{ msg }}</h1>
        <h2>This app is to help anyone exposed to the elements prepare for a rainy day. (ex: motorcyclist, bicyclist & pedestrians)</h2>
        <form v-on:submit.prevent="getCities">
            <p>City name: <input type="text" v-model="query" placeholder="Seattle, WA"> <button type="submit">Go</button></p>
        </form>
        <ul class="cities" v-if="results && results.list.length > 0">
            <li v-for="city in results.list">
                <h2>{{ city.name }}, {{ city.sys.country }}</h2>


                <weather-summary v-bind:weatherData="city.weather"></weather-summary>

                <weather-conditions v-bind:conditions="city.main"></weather-conditions>

            </li>
        </ul>
        <h6>API Credit</h6>

        <ul>
            <li>
                <a href="https://openweathermap.org/api" >
                    OpenWeather Map
                </a>
            </li>

        </ul>

    </div>
</template>




<script>
    import {
        API
    } from '@/common/api';

    import WeatherConditions from '@/components/WeatherConditions';


    export default {
        name: 'Search',
        data() {
            return {
                results: null,
                errors: [],
                query: ''
            }
        },
        methods: {
            getCities: function() {
                API.get('find', {
                        params: {
                            q: this.query
                        }
                    })
                    .then(response => {
                        this.results = response.data
                    })
                    .catch(error => {
                        this.errors.push(error)
                    });
            }
        },
        components: {

            'weather-conditions': WeatherConditions

        }
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
        color: slategray;
    }

    p {
        color: darkslategray;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: seagreen;
    }

</style>
