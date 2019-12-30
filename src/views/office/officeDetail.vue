<template>
    <div class="container">
      <div class="content-heading text-center">
        <h1 v-if="id">Office Details</h1>
      </div>
      <form class="jumbotron jumbotron-fluid">
        <div class="form-group">
          <button v-on:click="redirect" type="button" class="close text-danger" aria-label="Close">
            <span aria-hidden="true">
              <i class="far fa-times-circle"></i>
            </span>
          </button>
        </div>
        <div class="form-group">
          <label for="officeId" class="lblTitle">Office Id: </label>
          <label for="officeId" id="officeId" class="actualData"> {{office.officeId}} </label>
        </div>
        <div class="form-row">
            <label for="officeName" class="lblTitle">Office Name:  </label>&nbsp;&nbsp;
             <label for="officeName" id="officeName" class="actualData">{{office.officeName}}</label>
        </div>  
        <div class="form-row">
            <label for="address" class="lblTitle">Address: </label>&nbsp;&nbsp;
            <label for="address" id="address" class="actualData">{{office.streetAddress}}</label>
        </div>  
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="city" class="lblTitle">City: </label>&nbsp;&nbsp;
            <label for="city" id="city" class="actualData">{{office.city}}</label>
          </div>
        </div>  
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="zip" class="lblTitle">Zip Code: </label>&nbsp;&nbsp;
            <label for="zip" id="zip" class="actualData">{{office.zip}}</label>
          </div>
        </div>  
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="state" class="lblTitle">State: </label>&nbsp;&nbsp;
            <label for="state" id="state" class="actualData">{{office.state}}</label>
          </div>
        </div>  
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="country" class="lblTitle">Country: </label>&nbsp;&nbsp;
            <label for="country" id="country" class="actualData">{{office.country}}</label>
          </div>
        </div>  
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="fax" class="lblTitle">Fax: </label>&nbsp;&nbsp;
            <label for="fax" id="fax" class="actualData">{{office.fax}}</label>
          </div>
        </div>  
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="website" class="lblTitle">Website: </label>&nbsp;&nbsp;
            <label for="website" id="website" class="actualData">{{office.website}}</label>
          </div>
        </div>  
         <div class="form-row">
          <div class="form-group col-md-6">
            <label for="status" class="lblTitle">Status: </label>
            <label class="actualData" v-if="office.active">Active</label>
            <label class="actualData" v-else>Not Active</label>
          </div>
        </div>  

      </form>
    </div>
</template>

<script>
import OfficeDataService from "../../service/common/OfficeDataService";
export default {
  name: "office",
  data() {
    return {
      office: {
        active: '',
        city: '',
        country: '',
        fax: '',
        managerId: '',
        officeId: '',
        officeName: '',
        state: '',
        streetAddress: '',
        website: '',
        zip: ''
      },
      id: this.$route.params.id,      
    };
  },
  created() {
    if(this.id){
      OfficeDataService.getOfficeById(this.id).then( result => {
        this.office = result;
      });
    }
  },
  methods: {

      cancelForm: function(event){
        event.preventDefault();
        this.$router.push({name: "offices"});
      },

      redirect: function (event) {
       this.$router.push({name: "offices"});
      },

      }
};
</script>

<style >
.lblTitle{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: 10pt;
  font-weight: 200;
  color:#000066;
}

.actualData{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18pt;
  font-weight: 200;
  color:black;
}
</style>
