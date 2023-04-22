<template>
  <div class="fixed inset-0 z-50 overflow-auto bg-black/50 flex">
    <div class="bg-white rounded-lg shadow-lg relative m-auto w-full max-w-lg">
      <!-- Header -->
      <div class="p-4">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <button class="absolute top-0 right-0 mt-4 mr-4" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M10 9.171l-5.657-5.657-1.414 1.414L8.586 10l-5.657 5.657 1.414 1.414L10 11.414l5.657 5.657 1.414-1.414L11.414 10l5.657-5.657-1.414-1.414L10 9.171z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <!-- Content -->
      <div class="p-4">
        <slot></slot>
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
