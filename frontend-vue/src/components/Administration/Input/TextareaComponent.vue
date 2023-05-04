<template>
  <div class="form-control">
    <label class="label">{{ title }}</label>
    <textarea class="textarea textarea-bordered w-full focus:textarea-primary" @change="$emit('update', $event.target.value)" :value="value" :disabled="disabled"/>
  </div>
</template>

<script>
export default {
  name: "TextareaComponent",
  props: ['title', 'type', 'value', 'disabled'],
}
</script>

<style scoped>

</style>