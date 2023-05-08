<template>
  <div>
    <input type="checkbox" id="modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Suppression : {{ title }}</h3>
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: ['title']
}
</script>

<style scoped>

</style>
