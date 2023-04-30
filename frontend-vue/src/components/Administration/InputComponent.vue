<template>
  <div class="form-control">
    <label class="label">{{ title }}</label>
    <input v-if="type !== 'textarea'" class="input input-bordered w-full focus:input-primary" :type="type" @change="$emit('update', $event.target.value)" :value="value" :disabled="disabled"/>
    <textarea  v-else class="textarea textarea-bordered w-full focus:textarea-primary" @change="$emit('update', $event.target.value)" :value="value" :disabled="disabled"/>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: ['title', 'type', 'value', 'disabled'],
}
</script>

<style scoped>

</style>
