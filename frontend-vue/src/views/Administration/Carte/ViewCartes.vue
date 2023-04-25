<template>
  <div class="w-full">
    <h1 class="text-4xl mb-10 font-bold">Administration des cartes</h1>
    <router-link to="/administration/addCarte">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </router-link>
    <div class="grid grid-cols-4 gap-5">
      <CardComponent v-for="carte in listeCartes" :key="carte.id" :data="carte"/>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/Administration/CardComponent.vue";
export default {
  name: "ViewCartes",
  data() {
    return {
      listeCartes: []
    }
  },
  components: {
    CardComponent
  },
  methods: {
    async getAllCartes() {
      try {
        const response = await fetch("http://localhost:3000/cards");
        const data = await response.json();
        this.listeCartes = data;
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.getAllCartes();
  }
}
</script>

<style scoped>

</style>