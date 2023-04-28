<template>
  <article class="shadow rounded relative hover:scale-105 transition duration-500 cursor-pointer">
    <div class="absolute h-full w-full rounded bg-gradient-to-b from-transparent via-80% to-black">
      <p class="text-white absolute top-3/4 left-1/2 -translate-x-1/2 text-2xl font-semibold">
        {{data.nom}}
      </p>
    </div>
    <img :src="data.illustration" class="h-96 rounded">
  </article>
</template>

<script>
export default {
  name: "CardComponent",
  props: ['data'],
}
</script>

<style scoped>

</style>