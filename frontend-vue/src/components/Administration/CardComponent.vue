<template>
  <article class="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 shadow rounded hover:border-red-500 hover:border-2 duration-200 hover:shadow-lg hover:shadow-red-900 p-2">
    <div class="flex bg-gray-50 p-1 rounded justify-between mb-2">
      <h2 class="font-semibold text-gray-900 text-left">{{ data.nom }}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </div>
    <img class="rounded-lg py-2 h-36 w-full" :src="data.illustration"/>
    <div class="bg-white w-full rounded-lg text-left p-2">
      <p class="font-semibold">Compétences actives</p>
      <div v-for="competence_active in data.competences_active" :key="competence_active.id" class="mb-2">
        <p class="font-medium">{{ competence_active.competence.nom }}</p>
        <p class="text-xs italic font-thin">{{ competence_active.competence.description }}</p>
        <p class="text-xs font-thin">{{ competence_active.cout_mana }}</p>
      </div>
      <div>
        <p class="font-semibold">Compétences passives</p>
        <p class="font-medium">{{ data.competence_passive.competence.nom }}</p>
        <p class="text-xs italic font-thin">{{ data.competence_passive.competence.description }}</p>
      </div>
    </div>
    <p class="bg-gray-50 text-black rounded-xl py-1 mt-2 w-8 text-sm">3</p>
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