<template>
  <div class="relative min-h-screen md:flex">

    <!-- mobile menu bar -->
    <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      <!-- logo -->
      <a href="#" class="block p-4 text-white font-bold">Better Dev</a>

      <!-- mobile menu button -->
      <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- sidebar -->
    <div class="sidebar bg-gray-50 border-r text-gray-800 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

      <!-- logo -->
      <a href="#" class="text-white flex items-center space-x-2 px-4">

      </a>

      <!-- nav -->
      <nav class="text-left">
        <router-link to="/administration" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Dashboard
        </router-link>
        <router-link to="" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Cartes
        </router-link>
        <router-link to="/administration/competences" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Compétences
        </router-link>
        <router-link to="/administration/classes" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Classes
        </router-link>
        <router-link to="/administration/types" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Types
        </router-link>
      </nav>
    </div>

    <!-- content -->
    <div class="flex w-full justify-center p-10 bg-gray-100">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    components: {

    }
  }

</script>


<style scoped>

</style>
