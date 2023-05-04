<template>
  <article class="bg-red-500 p-2 rounded">
  <div class="flex flex-col gap-4">
      <div class="flex flex-row justify-between bg-white p-2 rounded">
        <h2 class="font-semibold">{{ data.nom }}</h2>
        <p class="tooltip" :data-tip="data.type.nom">{{ data.type.nom }}</p>
      </div>
      <div class="h-44">
        <img :src="data.illustration" class="h-44 w-full rounded">
      </div>
      <div class="bg-white text-left p-2 rounded">
        <h2 class="font-semibold">Compétences actives</h2>
        <div v-for="competence_active in data.competences_active" :key="competence_active.id" tabindex="0" class="collapse rounded-box w-full">
          <div class="collapse-title text-md font-medium text-left flex justify-between">
            <p>{{ competence_active.competence.nom }}</p>
            <p class="flex gap-2">
              {{ competence_active.cout_mana }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
              </svg>
            </p>
          </div>
          <div class="collapse-content text-left">
            <div class="flex flex-col">
              <p>{{ competence_active.competence.description }}</p>
              <p>Cout : {{ competence_active.cout_mana }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
