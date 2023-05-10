<template>
  <RightDrawer>
    <template v-slot:page-content>
      <ModalComponent :title="carte.nom">
        <p class="py-4">Êtes-vous sûr de vouloir supprimer cette carte ?</p>
        <p class="py-4">Cela supprimeras toutes les cartes associèes.</p>
        <div class="modal-action">
          <label for="modal" class="btn btn-outline btn-error" @click="deleteCard(carte)">Supprimer</label>
          <label for="modal" class="btn" @click="closeRightDrawerOrModal()">Annuler</label>
        </div>
      </ModalComponent>
      <div class="w-5/6 mx-auto p-6">
        <h1 class="text-3xl mb-10 font-bold text-gray-900 text-left">Cartes</h1>
        <div class="liste-types">
          <div class="flex justify-between mb-2">
            <h1 class="text-2xl text-gray-700 text-left">Liste des cartes</h1>
            <label class="border-green-600 border-2 text-green-500 hover:text-white hover:bg-green-600 shadow hover:scale-105 duration-200 rounded-full p-1 cursor-pointer" for="side-drawer" @click="openRightDrawer('create', null)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </label>
          </div>
          <TableComponent>
            <template v-slot:thead>
              <th scope="col" class="text-left">#</th>
              <th scope="col" class="text-left"></th>
              <th scope="col" class="text-left">Nom</th>
              <th scope="col" class="text-center"></th>
            </template>
            <template v-slot:tbody>
              <tr v-for="carte in listeCartes" :key="carte.id" class="">
                <td class="text-left">{{ carte.id }}</td>
                <td class="text-left">
                  <img :src="carte.illustration" class="w-12 h-12 rounded">
                </td>
                <td class="text-left">{{ carte.nom }}</td>
                <td class="flex space-x-2 justify-center">
                  <label class="border-red-600 border-2 text-red-500 hover:text-white hover:bg-red-600 shadow hover:scale-105 duration-200 p-1 rounded-full cursor-pointer" for="modal" @click="openModal(carte)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </label>

                  <label class="border-blue-600 border-2 text-blue-500 hover:text-white hover:bg-blue-600 shadow hover:scale-105 duration-200 p-1 rounded-full cursor-pointer" for="side-drawer" @click="openRightDrawer('update', carte)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </label>

                  <label class="border-amber-600 border-2 text-amber-500 hover:text-white hover:bg-amber-600 shadow hover:scale-105 duration-200 p-1 rounded-full cursor-pointer" for="side-drawer"  @click="openRightDrawer('read', carte)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </label>
                </td>
              </tr>
            </template>
          </TableComponent>
        </div>
      </div>
    </template>
    <template v-slot:drawer-content>
      <div v-if="typeAction === 'update'">
        <ViewUpdateCard :data="carte"/>
      </div>
      <div v-if="typeAction === 'create'">
        <ViewCreateCard/>
      </div>
      <div v-if="typeAction === 'read'">
        <ViewReadCard :carte="carte"/>
      </div>
    </template>
  </RightDrawer>
</template>

<script>
import TableComponent from "@/components/Administration/Table/TableComponent.vue";
import ModalComponent from "@/components/Administration/Modals/ModalDelComponent.vue";
import RightDrawer from "@/components/Administration/RightDrawer.vue";
import ViewReadCard from "@/views/Administration/Carte/ViewReadCard.vue";
import ViewCreateCard from "@/views/Administration/Carte/ViewCreateCard.vue";
import ViewUpdateCard from "@/views/Administration/Carte/ViewUpdateCard.vue";

export default {
  name: "ViewCartes",
  data() {
    return {
      listeCartes: [],
      carte : {},
      typeAction: null,
      listeTypes: [],
      listeCompetences: [],
      listeClasses: [],
      listeConditions: [],
      condition: {},
    }
  },

  components: {
    ViewUpdateCard,
    ViewCreateCard,
    ViewReadCard,
    RightDrawer,
    ModalComponent,
    TableComponent,
  },

  methods: {
    async openRightDrawer(type_action, carte){
      this.typeAction = type_action;

      if(carte !== null){
        this.carte = carte;
      }else{
        this.carte = {};
      }

      if(type_action === 'read') {
        await this.getCarteDetails(carte);
      }
    },

    openModal(carte){
      this.carte = carte;
    },

    /**
     * Fonction qui permet de récupèrer toutes les cartes de la base de données
     * @returns {Promise<void>}
     */
    async getAllCartes() {
      try {
        const response = await fetch("http://localhost:3000/cards");
        this.listeCartes = await response.json();

      } catch (e) {
        console.log(e)
      }
    },

    /**
     * Fonction qui permet de récupèrer les détails d'une carte
     * @param carte
     * @returns {Promise<void>}
     */
    async getCarteDetails(carte) {
      try {
        const response = await fetch(`http://localhost:3000/cards/${carte.id}`);
        const data = await response.json();
        this.carte = data;
        console.log(data);
      } catch (e) {
        console.log(e)
      }
    },

    /**
     * Fonction qui permet de supprimer une carte avec l'API
     * @param carte
     * @returns {Promise<void>}
     */
    async deleteCard(carte){
      try{
        const response = await fetch(`http://localhost:3000/cards/${carte.id}`, {
          method: "DELETE",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
      }catch (e) {
        console.log(e)
      }
      await this.resetData();
    },

    async resetData(){
      this.typeAction = null;
      this.carte = {};
      this.condition = {};
      await this.getAllCartes();
    },

    async closeRightDrawerOrModal(){
      await this.resetData();
    }
  },


  mounted() {
    this.getAllCartes();
  }
}
</script>

<style scoped>

</style>
