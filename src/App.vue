<template>
    <router-view/>
</template>

<script>
    import store from './store/index.js'

    export default {
        name: 'App',
        store
    }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  // Import Main styles for this application
  @import '@/styles/bootstrap.scss';
  @import '@/styles/app.scss';
</style>
