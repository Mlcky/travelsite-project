<template>
  <div class="app">
    <NavigationBar></NavigationBar>
    <router-view></router-view> 
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar"
export default {
  name: "App",
  components: {
    NavigationBar,
  }
}

</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
  }
  .app {
    min-height: 100vh;
    position: relative;
    background-color: #dad8d8;
  }
  .container {
    padding: 0 20px;
    max-width: 1140px;
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
</style>
