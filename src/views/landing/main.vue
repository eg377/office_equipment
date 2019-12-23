<template>
  <div class="div-container">
    <h1 id="title">Cognizant Location Resource Manager</h1>
    <div id="appLanding">
      <div>
        <!-- <div class="div continentList">
          <ul>
            <li @click="centerMap">North America</li>
            <li>Europe</li>
            <li>Asia</li>
          </ul>
        </div> -->
        <div>
          <!-- <h2>Search and add a pin</h2> -->
          <label>
            <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
            <button @click="addMarker">Add</button>
          </label>
          <br />
        </div>
        <br />
        <gmap-map
          :center="center[0]"
          :options="{styles: styles}"
          style="width:100%;  height: 450px;"
          :zoom="2"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>
  
<script>
import officeService from "../../service/common/OfficeDataService.js";

export default {
  name: "appLanding",
  data() {
    return {
      loading: false,
      center: [
        { lat: 30.508, lng: -73.587 },
        { lat: 35.001237, lng: -88.15932 },
        { lat: 20.698587, lng: 78.26626 },
        { lat: 49.883319, lng: 16.418917 }
      ],
      markers: [],
      places: [],
      currentPlace: null,
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#485d96"
            }
          ]
        },
        {
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "administrative.neighborhood",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "road",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#F5F7FA"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.geolocate();
  },
  created() {
    this.getOffices();
  },
  methods: {
    async getOffices() {
      this.loading = true;
      const promise = officeService.getAllOffices();
      promise.then(result => {
        this.offices = result;
        console.log(result);
        console.log(this.places);
        this.loading = false;
      });
    },
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    centerMap() {
      alert('map centered');
      this.center = this.center[3];
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        console.log(this.markers);
        console.log(this.places);
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style>
.div-container {
  text-align: center;
}
#appLanding {
  /* background-color: blue; */
  height: 65vh;
  width: 70vw;
  display: inline-block;
}

#title {
  padding: 20px;
}

#placeholder {
  color: white;
  text-align: center;
}

#map {
  height: 100%;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

// api key AIzaSyAybscOSzHux6W0Mod_-4HqzwoHk3kG_8g
