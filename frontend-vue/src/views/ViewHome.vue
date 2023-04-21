<template>
  <div class="background h-screen flex items-center">
    <div class="grid grid-cols-2 m-auto gap-5">
      <router-link to="/" class="max-w-xl rounded overflow-hidden shadow-lg bg-gray-900">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">Lorem Ipsum</div>
          <p class="text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </router-link>

      <router-link to="/" class="max-w-xl rounded overflow-hidden shadow-lg bg-gray-900">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">Lorem Ipsum</div>
          <p class="text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </router-link>

      <router-link to="/" class="max-w-xl rounded overflow-hidden shadow-lg bg-gray-900">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">Lorem Ipsum</div>
          <p class="text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </router-link>

      <router-link to="/" class="max-w-xl rounded overflow-hidden shadow-lg bg-gray-900">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">Lorem Ipsum</div>
          <p class="text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </router-link>
    </div>
  </div>
  <div class="bg-gray-950 pt-5">
    <h1 class="text-4xl font-bold text-orange-500">Runic Arena</h1>
  </div>
</template>

<script>
export default {
  name: "ViewHome"
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