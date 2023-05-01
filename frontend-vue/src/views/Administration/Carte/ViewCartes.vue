<template>
  <RightDrawer>
    <template v-slot:page-content>
      <ModalComponent :title="carte.nom">
        <p class="py-4">Êtes-vous sûr de vouloir supprimer cette carte ?</p>
        <p class="py-4">Cela supprimeras toutes les cartes associèes.</p>
        <div class="modal-action">
          <label for="modal" class="btn btn-outline btn-error" @click="deleteCompetences(carte)">Supprimer</label>
          <label for="modal" class="btn" @click="closeRightDrawerOrModal()">Annuler</label>
        </div>
      </ModalComponent>
      <div class="w-5/6 mx-auto p-6">
        <h1 class="text-3xl mb-10 font-bold text-gray-900 text-left">CARTES</h1>
        <div class="liste-competences">
          <div class="flex justify-between mb-2">
            <h1 class="text-2xl text-gray-700 text-left">Liste des cartes</h1>
            <label class="border-green-600 border-2 text-green-500 hover:text-white hover:bg-green-600 shadow hover:scale-105 duration-200 rounded-full p-1 cursor-pointer" for="side-drawer" @click="openRightDrawer('create', null)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </label>
          </div>
          <div class="grid grid-cols-4 gap-5">
            <label v-for="carte in listeCartes" :key="carte.id" for="side-drawer" @click="openRightDrawer('read', carte)">
              <CardComponent :data="carte" />
            </label>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:drawer-content>
      <div v-if="typeAction === 'update'">
        <h1 class="font-bold text-xl uppercase mb-6">Modification : {{ carte.nom }}</h1>
        <div class="w-4/5 mx-auto">
          <InputComponent type="text" title="Modification du nom" :value="carte.nom" @change="(e) => { carte.nom = e.target.value }"/>
          <InputComponent type="textarea" title="Modification de la description" :value="carte.description" @change="(e) => { carte.description = e.target.value }"/>
          <InputComponent type="text" title="Modification du type" :value="carte.type" @change="(e) => { carte.type = e.target.value }"/>
          <InputComponent type="text" title="Modification de l'effet" :value="carte.effet" @change="(e) => { carte.effet = e.target.value }"/>
          <InputComponent type="number" title="Modification de la valeur" :value="carte.valeur" @change="(e) => { carte.valeur = e.target.value }"/>
          <div class="flex gap-5 justify-center mt-6">
            <label class="btn btn-outline btn-primary" for="side-drawer" @click="updateCompetences(carte)">Modifier</label>
            <label class="btn btn-active" for="side-drawer">Annuler</label>
          </div>
        </div>
      </div>

      <div v-if="typeAction === 'create'">
        <h1 class="font-bold text-xl uppercase mb-6">Création d'une carte</h1>
        <div class="w-4/5 mx-auto">
          <InputComponent type="text" title="Nom de la nouvelle carte" :value="carte.nom" @change="(e) => { carte.nom = e.target.value }" />
          <InputComponent type="textarea" title="Description de la nouvelle carte" :value="carte.description" @change="(e) => { carte.description = e.target.value }" />
          <InputComponent type="text" title="Type de la nouvelle carte" :value="carte.type" @change="(e) => { carte.type = e.target.value }"/>
          <InputComponent type="text" title="Effet de la nouvelle carte" :value="carte.effet" @change="(e) => { carte.effet = e.target.value }" />
          <InputComponent type="number" title="Valeur de la nouvelle carte" :value="carte.valeur" @change="(e) => { carte.valeur = e.target.value }" />
          <div class="flex gap-5 justify-center mt-6">
            <label class="btn btn-outline btn-primary" for="side-drawer" @click="createCompetences(carte)">Créer</label>
            <label class="btn btn-active" for="side-drawer">Annuler</label>
          </div>
        </div>
      </div>

      <div v-if="typeAction === 'read'">
        <h1 class="font-bold text-xl uppercase mb-6">Informations de la carte</h1>
        <div class="w-4/5 mx-auto">
          <div class="flex gap-5">
            <div>
              <img :src="carte.illustration" class="w-64 h-96 rounded-2xl" alt="image">
            </div>
            <div class="flex-col">
              <h1 class="font-bold text-lg mb-6">{{ carte.nom }}</h1>
            </div>
          </div>
          <div class="flex gap-5 justify-center mt-6">
            <label class="btn btn-active" for="side-drawer">Fermer</label>
          </div>
        </div>
      </div>
    </template>
  </RightDrawer>
</template>

<script>
import CardComponent from "@/components/Administration/CardComponent.vue";
import InputComponent from "@/components/Administration/InputComponent.vue";
//import TableComponent from "@/components/Administration/Table/TableComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import RightDrawer from "@/components/Administration/RightDrawer.vue";
export default {
  name: "ViewCartes",
  data() {
    return {
      listeCartes: [],
      carte : {},
      typeAction: null,
    }
  },
  components: {
    RightDrawer,
    ModalComponent,
    //TableComponent,
    InputComponent,
    CardComponent
  },
  methods: {
    openRightDrawer(type_action, carte){
      this.typeAction = type_action;

      if(carte !== null){
        this.carte = carte;
      }else{
        this.carte = {};
      }
    },

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
