<template>
  <div id="appLanding">
    <!-- <img id="officeImage" alt="Vue logo" src="../../../src/assets/Cognizant-Chennai.jpg" /> -->
    <!-- <VectorMap height="450px" :options="options" :series="series" :markers="markers" /> -->
    <VectorMap height="450px" :options="options" :series="series" />
  </div>
</template>

<script>
import NavBar from "../../../src/components/NavBar/navbar.vue";
import VectorMap from "@/components/Maps/VectorMap";

const defaultColors = {
  markerColor: "#23b7e5", // the marker points
  bgColor: "transparent", // the background
  // scaleColors: ["#878c9a"], // the color of the region in the serie
  scaleColors: ["#002d93"],
  regionFill: "#bbbec6" // the base region color
};

const RegionValues = {
  // CA: 11100, // Canada
  // DE: 2510, // Germany
  // FR: 3710, // France
  // AU: 5710, // Australia
  // GB: 8310, // Great Britain
  // RU: 9310, // Russia
  // BR: 6610, // Brazil
  // SA: 410, // Saudi Arabia
  // CN: 4310, // China
  US: 839, // USA
  IN: 7810 // India
};

export default {
  name: "appLanding",
  components: {
    NavBar,
    VectorMap
  },
  data() {
    return {
      splineData: [
        {
          label: "Home",
          color: "#1ba3cd",
          data: [
            ["1", 38],
            ["2", 40],
            ["3", 42],
            ["4", 48],
            ["5", 50],
            ["6", 70],
            ["7", 145],
            ["8", 70],
            ["9", 59],
            ["10", 48],
            ["11", 38],
            ["12", 29],
            ["13", 30],
            ["14", 22],
            ["15", 28]
          ]
        },
        {
          label: "Overall",
          color: "#3a3f51",
          data: [
            ["1", 16],
            ["2", 18],
            ["3", 17],
            ["4", 16],
            ["5", 30],
            ["6", 110],
            ["7", 19],
            ["8", 18],
            ["9", 110],
            ["10", 19],
            ["11", 16],
            ["12", 10],
            ["13", 20],
            ["14", 10],
            ["15", 20]
          ]
        }
      ],
      splineOptions: {
        series: {
          lines: {
            show: false
          },
          points: {
            show: true,
            radius: 4
          },
          splines: {
            show: true,
            tension: 0.4,
            lineWidth: 1,
            fill: 0.5
          }
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1,
          hoverable: true,
          backgroundColor: "#fcfcfc"
        },
        tooltip: true,
        tooltipOpts: {
          content: (label, x, y) => x + " : " + y
        },
        xaxis: {
          tickColor: "#fcfcfc",
          mode: "categories"
        },
        yaxis: {
          min: 0,
          max: 150, // optional: use it for a clear represetation
          tickColor: "#eee",
          //position: 'right' or 'left',
          tickFormatter: v => v
        },
        shadowSize: 0
      },

      // VectorMap
      series: {
        regions: [
          {
            values: RegionValues,
            scale: defaultColors.scaleColors,
            normalizeFunction: "polynomial"
          }
        ]
      },
      // markers: [
      //   { latLng: [41.9, 12.45], name: "Vatican City" },
      //   { latLng: [43.73, 7.41], name: "Monaco" },
      //   { latLng: [-0.52, 166.93], name: "Nauru" },
      //   { latLng: [-8.51, 179.21], name: "Tuvalu" },
      //   { latLng: [7.11, 171.06], name: "Marshall Islands" },
      //   { latLng: [17.3, -62.73], name: "Saint Kitts and Nevis" },
      //   { latLng: [3.2, 73.22], name: "Maldives" },
      //   { latLng: [35.88, 14.5], name: "Malta" },
      //   { latLng: [41.0, -71.06], name: "New England" },
      //   { latLng: [12.05, -61.75], name: "Grenada" },
      //   { latLng: [13.16, -59.55], name: "Barbados" },
      //   { latLng: [17.11, -61.85], name: "Antigua and Barbuda" },
      //   { latLng: [-4.61, 55.45], name: "Seychelles" },
      //   { latLng: [7.35, 134.46], name: "Palau" },
      //   { latLng: [42.5, 1.51], name: "Andorra" }
      // ],
      options: {
        map: "world_mill_en",
        backgroundColor: defaultColors.bgColor,
        zoomMin: 1,
        zoomMax: 8,
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: defaultColors.regionFill,
            "fill-opacity": 1,
            stroke: "none",
            "stroke-width": 1.5,
            "stroke-opacity": 1
          },
          hover: {
            "fill-opacity": 0.8
          },
          selected: {
            fill: "blue"
          },
          selectedHover: {}
        },
        focusOn: {
          x: 0.4,
          y: 0.6,
          scale: 1
        },
        markerStyle: {
          initial: {
            fill: defaultColors.markerColor,
            stroke: defaultColors.markerColor
          }
        },
        onRegionLabelShow: (e, el, code) => {
          if (RegionValues[code])
            el.html(el.html() + ": " + RegionValues[code] + " Offices");
        }
      },

      selectedLanguage() {
        switch (this.$i18n.i18next.language) {
          case "es":
            return "Spanish";
            break;
          case "en":
          default:
            return "English";
        }
      }
    };
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

#cogButton {
  margin-right: 10px;
  color: white;
  background-color: #002d93;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11pt;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  float: right;
  position: relative;
  top: 35px;
}

#officeImage {
  max-width: 100%;
  height: auto;
}

#cogLogo {
  float: left;
  margin: 10px;
  position: relative;
  left: 70px;
  padding: 0.5em 1em;
}

#nav {
  padding: 10px;
  border-radius: 4px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#appLand {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #002d93;
}
</style>