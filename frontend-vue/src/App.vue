<template>
  <!--<NavigationBar/>-->
  <router-view></router-view>
  <!--FooterComponent/-->
</template>

<script>
//import NavigationBar from "@/components/NavigationComponent.vue";
//import FooterComponent from "@/components/GlobalComponents/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    //FooterComponent
    //NavigationBar
  }
}
</script>

<style>
#app {
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
