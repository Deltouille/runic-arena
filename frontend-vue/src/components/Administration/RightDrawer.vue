<template>
  <div class="drawer drawer-end w-full">
    <input id="side-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot name="page-content">

      </slot>
    </div>
    <div class="drawer-side">
      <label for="side-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-full bg-base-100 text-base-content shadow">
        <slot name="drawer-content">

        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightDrawer"
}
</script>

<style scoped>

</style>
