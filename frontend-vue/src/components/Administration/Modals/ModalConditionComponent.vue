<template>
  <div>
    <input type="checkbox" id="modal-condition" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{{ title }}</h3>
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalConditionComponent",
  props: ['title']
}
</script>

<style scoped>

</style>
