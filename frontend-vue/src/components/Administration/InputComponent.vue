<template>
  <div class="flex flex-col">
    <label class="text-left text-gray-900 font-bold">{{ title }}</label>
    <input class="border-2 border-gray-500 rounded px-4 py-2 focus:border-blue-600" type="{{type}}" @change="$emit('update', $event.target.value)"/>
  </div>
</template>
<script>
export default {
  name: "InputComponent",
  props: ['title', 'type'],
}
</script>
<style scoped>

</style>
