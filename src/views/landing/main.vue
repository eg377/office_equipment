<template>
  <div id="appLanding">
    <div>
        <!-- <NavBar /> -->
      <img id="officeImage" alt="Vue logo" src="../../../src/assets/Cognizant-Chennai.jpg" />
    </div>
  </div>
</template>

<script>
//import NavBar from '../../../src/components/NavBar/navbar.vue';
export default {
    name: 'appLanding',
    components: {
        //NavBar
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