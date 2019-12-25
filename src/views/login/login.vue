<template>  
    <div class="card" >
      <header class="card-header">
                   <img  id="cogLogo" alt="Cognizant logo" src="/img/CognizantLogo.png" style="max-width:220px; width:100%; padding: 20px 50px 20px;  display: block; margin-left: auto; margin-right: auto">
       
      </header>

    <form id="login" @submit="checkForm">

    <ul v-if="errors.length">
        <p>Please correct following error</p>
        <li class="errorMsg" v-for="error in errors" v-bind:key="error">
        {{ error }}
        </li>
    </ul>   

        
    <div class="card-content">        
        <div class="content">
          <div class="row-m2">
          <div class="field">
            <label for="username" class="inputLabel">username : </label>
            <input type="text" id="username" v-model="username" class="inputText"/>
          </div>
          </div>
          <div class="row-m2">
          <div class="field">
            <label for="password" class="inputLabel">password : </label>
            <input type="password" id="password" v-model="password" class="inputText" />
          </div>
          </div>
        </div>
        <div class="inputGroup3">
          <button class="loginBtn" >Login</button> <!--- v-on:click="login(username,password)" --->
        </div> 
      </div>  
    <!----------------------------------->
      
</form>
    <button @click="userAdded">Add User</button>
  </div>
  
</template>
 
<script>
import { mapGetters } from 'vuex'  

export default {
  data() {
    return{
    errors:[],  
    username: "",
    password: ""
    };
  },
  computed: {
          ...mapGetters('login', ['isAuthenticated'])
  },
  methods: {
        
    login (uname, passwd) {
      console.log("uname = " + uname);
      console.log("passwd = " + passwd);
      this.$store.dispatch('login/login', {username: uname, password: passwd})
        .then(
           (response) => {
            console.log("Got login response " + response)
            this.username = ''
            this.password = '' 
            if (response !== undefined && response !== 'error')           
               this.$router.push({name: 'main' })
            else 
               this.errors.push("Some login info is not correct");

           }
          )
          .catch(()=>{ 
            this.username = ''
            this.password = ''
            console.error("Got nothing from server." )
          })
            
        
    },
    checkForm(e){
      e.preventDefault();
      this.errors = [];
      if(!this.username){
        this.errors.push("Enter Username.");
      }
      else if(this.username.length < 3){
             this.errors.push("Not valid. Username is less then 3 characters."); 
      }
      if(!this.password){
        this.errors.push("Enter Password.");
      }
      
      if(this.errors.length === 0){
         this.login(this.username, this.password); 
      }
    },    
     userAdded(){
                console.log("Work in progress")
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
    width: 450px;
    height: 200px;
    margin-right: auto;
    margin-left: auto;    
}

.card {
    background-color: white;
    -webkit-box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
    color: #4a4a4a;
    max-width: 450px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
}

.errorMsg{
    color:red;

}
</style>