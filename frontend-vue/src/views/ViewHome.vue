<template>
  <div id="home">
    <div class="hero min-h-screen background">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Runic Arena</h1>
          <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <NavigationComponent/>
    <div class="min-h-screen bg-gray-900">

    </div>
  </div>
</template>

<script>
import NavigationComponent from "@/components/Accueil/NavigationComponent.vue";

export default {
  name: "ViewHome",
  components: {NavigationComponent}
}
</script>

<style scoped>
  .background {
    background-image: url('@/assets/images/background-vue.png');
    background-size: auto;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
