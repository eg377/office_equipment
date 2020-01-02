<template>
  <div>
    <div class="content-heading mb3">
      <div>&nbsp;</div>
    </div>
    <!-- START cards box-->
    <div class="row">
      <div class="col-xl-3 col-md-6">
        <!-- START card-->
        <div class="card flex-row align-items-center align-items-stretch border-0">
          <div
            class="col-4 d-flex align-items-center bg-purple-dark justify-content-center rounded-left"
          >
            <em class="icon-globe fa-3x"></em>
          </div>
          <div class="col-8 py-3 bg-purple rounded-right">
            <div class="h2 mt-0">{{officeCount.length}}</div>
            <div class="text-uppercase">Offices</div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <!-- START card-->
        <div class="card flex-row align-items-center align-items-stretch border-0">
          <div
            class="col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left"
          >
            <em class="fas fa-users fa-3x"></em>
          </div>
          <div class="col-8 py-3 bg-primary rounded-right">
            <div class="h2 mt-0">{{userCount.length}}</div>
            <div class="text-uppercase">Users</div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-12">
        <!-- START card-->
        <div class="card flex-row align-items-center align-items-stretch border-0">
          <div
            class="col-4 d-flex align-items-center bg-green-dark justify-content-center rounded-left"
          >
            <em class="fas fa-toolbox fa-3x"></em>
          </div>
          <div class="col-8 py-3 bg-green rounded-right">
            <div class="h2 mt-0">{{equipmentCount.length}}</div>
            <div class="text-uppercase">Equipments</div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-12">
        <!-- START date widget-->
        <div class="card flex-row align-items-center align-items-stretch border-0">
          <div class="col-4 d-flex align-items-center bg-green justify-content-center rounded-left">
            <div class="text-center">
              <!-- See formats: https://docs.angularjs.org/api/ng/filter/date-->
              <Now class="text-sm" format="MMMM"></Now>
              <br />
              <Now class="h2 mt-0" format="D"></Now>
            </div>
          </div>
          <div class="col-8 py-3 rounded-right">
            <Now class="text-uppercase" format="dddd"></Now>
            <br />
            <Now class="h2 mt-0" format="h:mm"></Now>
            <Now class="text-muted text-sm" format="a"></Now>EST
          </div>
        </div>
        <!-- END date widget-->
      </div>
    </div>
    <!--
        <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-12">
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-purple-dark justify-content-center rounded-left">
                        <em class="fas fa-users fa-3x"></em>
                    </div>
                    <div class="col-8 py-3 bg-purple rounded-right">
                        <div class="h2 mt-0">{{americaUserCount}}
                        </div>
                        <div class="text-uppercase">America</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left">
                        <em class="fas fa-users fa-3x"></em>
                    </div>
                    <div class="col-8 py-3 bg-primary rounded-right">
                        <div class="h2 mt-0">{{europeUserCount}}</div>
                        <div class="text-uppercase">Europe</div>
                    </div>
                </div>
            </div>            
            <div class="col-xl-3 col-lg-6 col-md-12">
                <div class="card flex-row align-items-center align-items-stretch border-0">
                    <div class="col-4 d-flex align-items-center bg-green-dark justify-content-center rounded-left">
                        <em class="fas fa-users fa-3x"></em>
                    </div>
                    <div class="col-8 py-3 bg-green rounded-right">
                        <div class="h2 mt-0">{{asiaUserCount}}</div>
                        <div class="text-uppercase">Asia</div>
                    </div>
                </div>
            </div>
        </div>
    -->
    <!-- END cards box-->
    <div class="row">
      <!-- START dashboard main content-->
      <!-- START bar chart-->
      <div class="col-xl-9">
        <div class="card" id="cardChart3">
          <div class="card-header">
            <div class="card-title">Equipment Status</div>
          </div>
          <div class="card-wrapper">
            <div class="card-body">
              <FlotChart :data="barStackedData" :options="barStackedOptions" height="250px" />
            </div>
          </div>
        </div>
        <!-- END bar chart-->
      </div>
      <!-- START dashboard sidebar-->
      <div class="col-xl-3">
        <!-- START loader widget-->
        <div class="card card-default">
          <div class="card-body">
            <a class="text-muted float-right" href="#">
              <em class="fa fa-arrow-right"></em>
            </a>
            <div class="text-info">Average Monthly Assgined Equipment</div>
            <div class="text-center py-4">
              <div ref="easypie" class="easypie-chart easypie-chart-lg" data-percent="70">
                <span>70%</span>
              </div>
            </div>
            <Sparkline
              :options="{
                                barColor:'#23b7e5',
                                height:30,
                                barWidth:5,
                                barSpacing:2
                            }"
              :values="[5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7]"
              class="text-center"
            />
          </div>
          <div class="card-footer">
            <p class="text-muted">
              <em class="fa fa-upload fa-fw"></em>
              <span>This Month</span>
              <span class="text-dark">62/100</span>
            </p>
          </div>
        </div>
        <!-- END loader widget-->
      </div>
      <!-- END dashboard sidebar-->

      <!-- Weather Widget -->
      <div v-if="errorStr">
        Sorry, but the following error
        occurred: {{errorStr}}
      </div>

      <div v-if="gettingLocation">
        <i>Getting your location...</i>
      </div>

      <!-- <div v-if="location">
          Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}</div> -->
      <div id="openweathermap-widget-8"></div>
      <!--END Weather Widget -->
    </div>
    <!-- END chart-->

    <!-- END dashboard main content-->
  </div>
</template>

<script>
import EasyPieChart from "easy-pie-chart";

import CardTool from "@/components/Common/CardTool";
import Sparkline from "@/components/Common/Sparklines";
import Scrollable from "@/components/Common/Scrollable";
import FlotChart from "@/components/Charts/Flot";
import Now from "@/components/Common/Now";

import Offices from "../../service/common/OfficeDataService";
import Users from "../../service/common/UserDataService";
import Equipments from "../../service/common/EquipmentDataService";

export default {
  name: "DashboardV1",
  components: {
    CardTool,
    Sparkline,
    Scrollable,
    FlotChart,
    Now
  },
  data() {
    return {
      officeLegend: [],
      officeCount: [],
      userCount: [],
      stackedData: [],
      assignedArray: [],
      unassignedArray: [],
      equipmentCount: [],
      americaUserCount: 950,
      europeUserCount: 1300,
      asiaUserCount: 1200,
      // barStackedData:
      // //[],
      // [{
      //     "label": "Assigned",
      //     "color": "#7266ba",
      //     "data":
      //     [
      //         ["US1", 20],
      //     ]
      // }, {
      //     "label": "Unassigned",
      //     "color": "#564aa3",
      //     "data":
      //     [
      //         ["US1", 30],
      //     ]
      // }],
      barStackedData: [
        {
          label: "Total",
          color: "#9289ca",
          data: [
            ["Jan", 136],
            ["Feb", 97],
            ["Mar", 110],
            ["Apr", 62],
            ["May", 85],
            ["Jun", 115],
            ["Jul", 78],
            ["Aug", 104],
            ["Sep", 82],
            ["Oct", 97],
            ["Nov", 110],
            ["Dec", 100]
          ]
        },
        {
          label: "Assigned",
          color: "#7266ba",
          data: [
            ["Jan", 81],
            ["Feb", 47],
            ["Mar", 44],
            ["Apr", 100],
            ["May", 49],
            ["Jun", 94],
            ["Jul", 44],
            ["Aug", 52],
            ["Sep", 17],
            ["Oct", 47],
            ["Nov", 44],
            ["Dec", 62]
          ]
        }
        // , {
        //     "label": "Unassgined",
        //     "color": "#564aa3",
        //     "data": [
        //         ["Jan", 29],
        //         ["Feb", 56],
        //         ["Mar", 14],
        //         ["Apr", 21],
        //         ["May", 5],
        //         ["Jun", 24],
        //         ["Jul", 37],
        //         ["Aug", 22],
        //         ["Sep", 28],
        //         ["Oct", 9],
        //         ["Nov", 14],
        //         ["Dec", 21],
        //     ]
        // }
      ],
      location: null,
      gettingLocation: false,
      errorStr: null,

      barStackedOptions: {
        series: {
          stack: true,
          bars: {
            align: "center",
            lineWidth: 0,
            show: true,
            barWidth: 0.6,
            fill: 0.9
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
          // position: 'right' or 'left'
          tickColor: "#eee"
        },
        shadowSize: 0
      }
    };
  },
  mounted() {
    // Easy pie
    let pieOptions1 = {
      animate: {
        duration: 800,
        enabled: true
      },
      barColor: "#23b7e5",
      trackColor: "rgba(200,200,200,0.4)",
      scaleColor: false,
      lineWidth: 10,
      lineCap: "round",
      size: 145
    };
    new EasyPieChart(this.$refs.easypie, pieOptions1);
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
    },
    onRefresh(_, done) {
      setTimeout(done, 2000);
    },
    async getUsers() {
      const promise = Users.getAllUsers();
      promise.then(result => {
        this.userCount = result;
      });
    },
    async getOffices() {
      const promise = Offices.getAllOffices();
      promise.then(result => {
        this.officeCount = result;
      });
    },
    async getEquipment() {
      const promise = Equipments.getAllEquipments();
      promise.then(result => {
        this.equipmentCount = result;
      });
    },
    async getChartData() {
      const officeList = await Offices.getAllOffices();
      const equipmentList = await Equipments.getAllEquipments();

      var equipementList = [];
      const result = equipmentList.map((m, eindex) => {
        var equipment = {
          country: officeList.find(function(element) {
            return element.officeId == m.officeId;
          }).country,
          assigned:
            m.userId != null && m.userId != undefined && m.userId > 0 ? 1 : 0,
          type: m.equipementType
        };
        equipementList.push(equipment);
      });
      var assignedArray = [];
      var unassignedArray = [];
      equipementList.map((eq, i) => {
        if (eq.assigned == 1) {
          var idx = assignedArray.findIndex(el => {
            return el[0] == eq.country;
          });
          console.log("idx", idx, eq);
          if (idx >= 0) {
            //  console.log(i, idx, assignedArray);
            assignedArray[idx][1] = assignedArray[idx][1] + 1;
          } else {
            //console.log(i, idx, assignedArray);
            assignedArray.push([eq.country, 1]);
          }
        } else {
          var idx = unassignedArray.findIndex(el => {
            return el[0] == eq.country;
          });
          console.log("idx", idx, eq);
          if (idx >= 0) {
            //  console.log(i, idx, assignedArray);
            unassignedArray[idx][1] = unassignedArray[idx][1] + 1;
          } else {
            //console.log(i, idx, assignedArray);
            unassignedArray.push([eq.country, 1]);
          }
        }
      });

      const tData = [
        {
          label: "Assigned",
          color: "#7266ba",
          data: assignedArray
        },
        {
          label: "Unassigned",
          color: "#564aa3",
          data: unassignedArray
        }
      ];

      //this.barStackedData = tData;

      console.log(this.barStackedData, tData);
    }
  },
  computed: {},
  created() {
    this.getUsers();
    this.getOffices();
    this.getEquipment();
    this.getChartData();

    //gets your location using geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.gettingLocation = false;
        this.location = pos;
      },
      err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  }
};
//widget app
window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
  id: 8,
  cityid: "5105262",
  appid: "12664c743fc931614e076968c81ddcf1",
  units: "imperial",
  containerid: "openweathermap-widget-8"
});
(function() {
  var script = document.createElement("script");
  script.async = true;
  script.charset = "utf-8";
  script.src =
    "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
})();
</script>