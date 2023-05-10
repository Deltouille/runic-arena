<template>
  <div class="form-control">
    <label class="label">{{ title }}</label>
    <select  class="select select-bordered" @change="$emit('update', $event.target.value)" :value="value" :disabled="disabled">
      <slot name="select-options"></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: ['title', 'value', 'disabled'],
  methods: {

  },
  data(){
    return {

    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
