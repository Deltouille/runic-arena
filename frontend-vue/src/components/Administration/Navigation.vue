<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-gray-50 border-b absolute z-10">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">Runic Arena</div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li>
              <router-link to="/administration">Administration</router-link>
            </li>
            <li>
              <a>Navbar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <slot name="page-content">

      </slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-gray-50">
        <!-- Sidebar content here -->
        <li>
          <router-link to="/administration">Administration</router-link>
        </li>
        <li>
          <router-link to="/administration/cartes">Cartes</router-link>
        </li>
        <li>
          <router-link to="/administration/competences">Compétences</router-link>
        </li>
        <li>
          <router-link to="/administration/classes">Classes</router-link>
        </li>
        <li>
          <router-link to="/administration/types">Types</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

</style>
