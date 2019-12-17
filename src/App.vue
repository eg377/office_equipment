<template>
    <div>
        <!-- <NavBar/> -->
        <router-view/> 
    </div>
</template>

<script>
    import store from './store/index.js'
    import NavBar from '../src/components/NavBar/navbar.vue'

    export default {
        name: 'App',
        store,
        components: {
            NavBar
        }
    }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  // Import Main styles for this application
  @import '@/styles/bootstrap.scss';
  @import '@/styles/app.scss';
</style>
