<template>
  <article class="artboard phone-1 md:phone-3 bg-black p-4 rounded mx-auto">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row justify-between bg-white p-2 rounded">
        <h2 class="font-semibold">{{ data.nom }}</h2>
        <p class="tooltip" :data-tip="data.type.nom">{{ data.type.nom }}</p>
      </div>
      <div class="h-80">
        <img :src="data.illustration" class="h-full w-full rounded">
      </div>
      <div class="bg-white text-left p-2 rounded">
        <h2 class="font-semibold text-lg">Compétences actives</h2>
        <div v-for="competence_active in data.competences_active" :key="competence_active.id" tabindex="0" class="rounded-box w-full mb-2">
          <div class="text-md font-medium text-left flex justify-between">
            <p class="font-semibold">{{ competence_active.competence.nom }}</p>
            <p class="flex gap-2">
              {{ competence_active.cout_mana }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
              </svg>
            </p>
          </div>
          <p class="italic">{{ competence_active.competence.description }}</p>
        </div>

        <h2 class="font-semibold text-lg">Compétences passives</h2>
        <p class="font-semibold">{{ data.competence_passive.competence.nom }}</p>
        <p class="italic">{{ data.competence_passive.competence.description }}</p>
        <p class="font-semibold text-lg mt-2">Condition d'activation</p>
        <p class="font-semibold text-lg mt-2">Marche pas</p>
        <!--p class="font-semibold">{{ data.competence_passive.condition.nom }}</p-->
        <!--p class="italic">{{ data.competence_passive.condition.description }}</p-->
        <!--p class="text-italic">{{ data.competence_passive.condition.description }}</p-->
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
