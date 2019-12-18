<template>
  <div id="Weather">
      <h1>Test</h1>
    <!-- <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header text-center">
                    <h1>Karratha Weather</h1>
                </div>
                <div class="card-body">
                    <div id="weatherApp">
                        <div class="temp-format btn-group" role="group" aria-label="Temperature format">
                            <button @click="getWeather" type="button" class="btn btn-outline-secondary">Get Data</button>
                            <button @click="setCelsius" type="button" class="btn btn-outline-secondary">&deg;C</button>
                            <button @click="setFahrenheit" type="button" class="btn btn-outline-secondary">&deg;F</button>
                        </div>
                        <div class="weather-details">
                            <div class="icon text-center">
                                <span class="fas" :class="setPhase()"></span>
                            </div>
                            <p class="text-center">Right now in Karratha it's</p>
                            <p class="weather-temperature text-center">
                                <span class="time">{{ setTime() }}</span> &amp;
                                <span class="weather-value">{{ temp }}</span>&deg;<span class="weather-format">{{ format }}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <small>Created in VueJs by Alex Graham</small>
                </div>
            </div>
        </div>
    </div> -->
</div>
</template>

<script>
export default {
    name: 'Weather',
    components: {
    }
};

new Vue({
    el: "#Weather",
    data: {
        temp: 0,
        format: 'C',
        time: new Date(),
        phase: 'fa-adjust'
    },
    methods: {
        setCelsius: function() {
            if (this.format = 'F') {
                this.format = 'C';
                this.temp = (this.temp - 32) * 5/9;
            } else {
                this.temp = this.temp;
            }
        },
        setFahrenheit: function() {
            this.format = 'F';
            this.temp = (this.temp * 9/5) + 32;
        },
        setTime: function() {
            var timeAtLoad = this.time;
            return timeAtLoad.toLocaleTimeString([], {timeZone: 'Australia/Perth', hour: '2-digit', minute:'2-digit', hour12: true})
            
        },
        setPhase: function() {
            var timeOfDayUTC = new Date().getUTCHours();
            var timeOfDay = timeOfDayUTC + 8;
            
            if (timeOfDay > 6 && timeOfDay < 18) {
                return 'fa-sun'
            } else {
                return 'fa-moon'
            }
        },
        getWeather: function() {
            var request = new XMLHttpRequest();
            request.open('GET', 'http://www.bom.gov.au/fwo/IDW60801/IDW60801.95307.json', true);
            request.onload = function() {
              if (request.status >= 200 && request.status < 400) {
                 // Success!
                 var weatherData = JSON.parse(request.responseText);
                 console.log('Data retrieved');
              } else {
                 // We reached our target server, but it returned an error
                 console.log('There was a problem retrieving the data') 
              }
            };
            request.onerror = function() {
              // There was a connection error of some sort
                console.log('There was a connection error');
            };
            request.send();
        }
    }
});
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
/* body {
    padding: 2rem 0;
}

h1 {
    font-size: 2rem;
}

.temp-format {
    float: right;
    margin-bottom: 2rem;
    
    button {
        width: auto;
    } 
}

.weather-details {
    clear: both;
}

.weather-temperature {
    font-size: 3rem;
}

.icon {
    font-size: 3rem;
    margin-bottom: 1rem;
} */
</style>