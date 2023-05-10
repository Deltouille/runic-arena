<template>
  <div>
    <h1 class="font-bold text-xl uppercase mb-6 p-4">Informations de la carte</h1>
    <CardComponent :data="carte"/>
    <div class="flex gap-5 justify-center mt-6">
      <label class="btn btn-active" for="side-drawer">Annuler</label>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/Administration/CardComponent.vue";

export default {
  name: "ViewReadCard",
  components: {CardComponent},
  props: ['carte']
}
</script>

<style scoped>

</style>
