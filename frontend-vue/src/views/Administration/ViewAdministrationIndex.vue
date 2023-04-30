<template>
  <div>
    <NavigationBar>
      <template v-slot:page-content>
        <div class="flex w-full justify-center min-h-screen">
          <router-view></router-view>
        </div>
      </template>
    </NavigationBar>
    <!-- content -->

  </div>
</template>

<script>
  import NavigationBar from "@/components/Navigation.vue";

  export default {
    components: {
      NavigationBar

    }
  }

</script>


<style scoped>

</style>
