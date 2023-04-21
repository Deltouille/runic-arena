<template>
  <div class="h-screen flex items-center">
    <nav class="bg-white border-r h-screen w-1/6 top-0 left-0 pt-16">
      <div class="p-4">
        <h1 class="text-black text-xl font-bold">Administration</h1>
      </div>
      <ul class="text-gray-800 text-left">
        <li class="py-2 px-4 mx-4 hover:bg-sky-400 hover:text-gray-100 font-semibold rounded duration-200">
          <router-link to="" class="flex">Cartes</router-link>
        </li>
        <li class="py-2 px-4 mx-4 hover:bg-sky-400 hover:text-gray-100 font-semibold rounded duration-200">
          <router-link to="" class="flex">Compétences</router-link>
        </li>
        <li class="py-2 px-4 mx-4 hover:bg-sky-400 hover:text-gray-100 font-semibold rounded duration-200">
          <router-link to="/administration/classes" class="flex">Classes</router-link>
        </li>
        <li class="py-2 px-4 mx-4 hover:bg-sky-400 hover:text-gray-100 font-semibold rounded duration-200">
          <router-link to="/administration/types" class="flex">Types</router-link>
        </li>
      </ul>
    </nav>
    <div class="flex w-5/6 justify-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ViewAdministrationIndex",
  }

</script>

<style scoped>

</style>