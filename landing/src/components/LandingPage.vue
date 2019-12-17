import 'bootstrap';

<template>
  <div id="appLanding">
    <div id="nav">
      <img id="cogLogo" alt="Cognizant logo" src="../assets/CognizantLogo.png" />
      <button id="cogButton">Log Out</button>
      <button id="cogButton" @click="onClickOffices">Offices</button>
      <img id="officeImage" alt="Vue logo" src="../assets/one.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      
    };
  },
  props: {
    msg: String
  },
  methods: {
    onClickOffices() {
      <router-link to="/"></router-link>
    },
    onClickLogOut() {
      // Logout
    }
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
}

#officeImage {
  margin: 10px;
  float: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#cogLogo {
  float: left;
  margin: 10px;
}

#nav {
  padding: 30px;
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