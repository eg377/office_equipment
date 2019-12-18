<template>  
    <div class="card" >
      <header class="card-header">
        <!--<img  id="cogLogo" alt="Cognizant logo" src="../assets/CognizantLogo.png" style="max-width:220px; width:100%; padding: 0px 50px 20px;  display: block; margin-left: auto; margin-right: auto">-->
       <!-- <p class="card-header-title">Login</p> -->
      </header>

    <form id="app" @submit="checkForm">

    <ul v-if="errors.length">
        <p>Please correct follwing error</p>
        <li class="errorMsg" v-for="error in errors" v-bind:key="errors">
        {{ error }}
        </li>
    </ul>    
  

    <div class="card-content">
        <div>
            <img  id="cogLogo" alt="Cognizant logo" src="/img/CognizantLogo.png" style="max-width:220px; width:100%; padding: 0px 50px 20px;  display: block; margin-left: auto; margin-right: auto">
        </div>
        <div class="content">
          <div class="field">
            <label for="username" class="inputLabel">username : </label>
            <input type="number" id="username" v-model="username" class="inputText"/>
          </div>
          <div class="field">
            <label for="password" class="inputLabel">password : </label>
            <input type="password" id="password" v-model="password" class="inputText" />
          </div>
        </div>
        <div class="inputGroup3">
          <button class="loginBtn" >Login</button> <!--- v-on:click="login(username,password)" --->
        </div> 
      </div>  
    <!----------------------------------->
  
</form>
  </div>
      </div>
      
    </div>  
</template>
 
<script>
import authService from '../../service/common/CommonCall'

const authServiceUrl = "https://sunshine-auth-service.cfapps.io/oauth/token";
const content = 'grant_type=password&username=admin&password=admin';
const headerOptions = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa( 'ClientId:ClientSecret')
    }     
};

var token;
authService.postCall(authServiceUrl, content, headerOptions).then(response => {
    token = response;
    console.log('response',response);
});

export default {
  data() {
    return{
    errors:[],  
    username: "",
    password: ""
    };
  },
 /* computed: {
    id(){
      return this.$route.params.id;
    }
  },*/
  methods: {
    async login(uname, pass) {
      console.log("uname = " + uname);
      console.log("pass = " + pass);
      console.log("Login functionality to be added")
      const token = await authService.postCall(authServiceUrl, content, headerOptions);
      sessionStorage.setItem('access_token', token );
      this.$router.push({path:'/main' });
    },
    checkForm(e){
      e.preventDefault();
      this.errors = [];
      if(!this.username){
        this.errors.push("Enter Username.");
      }
      else if(this.username.length != 6){
             this.errors.push("Not valid. Username must be 6 digits."); 
      }
      if(!this.password){
        this.errors.push("Enter Password.");
      }
      
      if(this.errors.length === 0){
         this.login(this.username, this.password); 
      }


    }
  }
};



</script>

<style scoped>
.inputText{
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  color:blue;
}

.inputLabel{
  font-size: 12pt;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:brown;
  font-weight: bold;
}

.loginBtn{
  width: 120px;
  height: 30px;  
  font-size: 11pt;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:darkblue;
  font-weight: bold;
  border: 2px;
  border-color: brown;
}

.card-content{
    width: 400px;
    height: 200px;
    margin-right: auto;
    margin-left: auto;    
}

.card {
    background-color: white;
    -webkit-box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    color: #4a4a4a;
    max-width: 400px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
}

.errorMsg{
    color:red;

}
</style>