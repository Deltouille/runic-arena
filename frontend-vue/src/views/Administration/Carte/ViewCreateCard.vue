<template>
  <div class="w-full">
    <h1 class="text-4xl mb-10 font-bold">Créer une carte</h1>
    <div class="flex">
      <div class="w-1/2 p-4">
        <CardComponent :data="card"/>
      </div>
      <div class="w-1/2">
        <div class="flex flex-col gap-5">
          <InputComponent title="Nom de la carte"/>
          <InputComponent title="Illustration"/>
          <InputComponent/>
          <InputComponent/>
          <InputComponent/>
          <InputComponent title="Puissance" type="number"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/Administration/Input/InputComponent.vue";
import CardComponent from "@/components/Administration/CardComponent.vue";

export default {
  name: "ViewCreateCard",
  components: {CardComponent, InputComponent},
  data(){
    return {
      card: {
        nom: 'Nom de la carte',
        illustration: 'Illustration',
        competences_active: [
          {
            id: 1,
            competence: {
              nom: 'Active Skill 1',
              description: 'Description of Active Skill 1'
            },
            cout_mana: 2
          },
          {
            id: 2,
            competence: {
              nom: 'Active Skill 2',
              description: 'Description of Active Skill 2'
            },
            cout_mana: 3
          }
        ],
        competence_passive: {
          competence: {
            nom: 'Passive Skill',
            description: 'Description of Passive Skill'
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>