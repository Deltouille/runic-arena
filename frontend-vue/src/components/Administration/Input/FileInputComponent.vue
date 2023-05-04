<template>
  <div class="form-control">
    <label class="label">{{ title }}</label>
    <input type="file" class="file-input file-input-bordered file-input-primary w-full" @change="$emit('update', $event.target.value)" :value="value" :disabled="disabled"/>
  </div>
</template>

<script>
export default {
  name: "FileInputComponent",
  props: ['title', 'value', 'disabled'],
}
</script>

<style scoped>

</style>