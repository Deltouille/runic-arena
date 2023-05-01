<template>
  <RightDrawer>
    <template v-slot:page-content>
      <ModalComponent :title="type.nom">
        <p class="py-4">Êtes-vous sûr de vouloir supprimer ce type ?</p>
        <p class="py-4">Cela supprimeras toutes les cartes associèes.</p>
        <div class="modal-action">
          <label for="modal" class="btn btn-outline btn-error" @click="deleteType(type)">Supprimer</label>
          <label for="modal" class="btn" @click="closeRightDrawerOrModal()">Annuler</label>
        </div>
      </ModalComponent>
      <div class="w-5/6 mx-auto p-6">
        <h1 class="text-3xl mb-10 font-bold text-gray-900 text-left">TYPES</h1>
        <div class="liste-types">
          <div class="flex justify-between mb-2">
            <h1 class="text-2xl text-gray-700 text-left">Liste des types</h1>
            <label class="border-green-600 border-2 text-green-500 hover:text-white hover:bg-green-600 shadow hover:scale-105 duration-200 rounded-full p-1 cursor-pointer" for="side-drawer" @click="openRightDrawer('create', null)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </label>
          </div>
          <TableComponent>
            <template v-slot:thead>
              <th scope="col" class="text-left">#</th>
              <th scope="col" class="text-left">Nom</th>
              <th scope="col" class="text-center"></th>
            </template>
            <template v-slot:tbody>
              <tr v-for="type in listeTypes" :key="type.id" class="">
                <td class="text-left">{{ type.id }}</td>
                <td class="text-left">{{ type.nom }}</td>
                <td class="flex space-x-2 justify-center">
                  <label class="border-red-600 border-2 text-red-500 hover:text-white hover:bg-red-600 shadow hover:scale-105 duration-200 p-1 rounded-full cursor-pointer" for="modal" @click="openModal(type)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </label>

                  <label class="border-blue-600 border-2 text-blue-500 hover:text-white hover:bg-blue-600 shadow hover:scale-105 duration-200 p-1 rounded-full cursor-pointer" for="side-drawer" @click="openRightDrawer('update', type)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </label>

                  <label class="border-amber-600 border-2 text-amber-500 hover:text-white hover:bg-amber-600 shadow hover:scale-105 duration-200 p-1 rounded-full cursor-pointer" for="side-drawer"  @click="openRightDrawer('read', type)">
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
        <h1 class="font-bold text-xl uppercase mb-6">Modification : {{ type.nom }}</h1>
        <div class="w-4/5 mx-auto">
          <InputComponent type="text" title="Modification du nom" :value="type.nom" @change="(e) => { type.nom = e.target.value }"/>
          <div class="flex gap-5 justify-center mt-6">
            <label class="btn btn-outline btn-primary" for="side-drawer" @click="updateClasse(type)">Modifier</label>
            <label class="btn btn-active" for="side-drawer">Annuler</label>
          </div>
        </div>
      </div>

      <div v-if="typeAction === 'create'">
        <h1 class="font-bold text-xl uppercase mb-6">Création d'une type</h1>
        <div class="w-4/5 mx-auto">
          <InputComponent type="text" title="Nom de la nouvelle type" :value="type.nom" @change="(e) => { type.nom = e.target.value }"/>
          <div class="flex gap-5 justify-center mt-6">
            <label class="btn btn-outline btn-primary" for="side-drawer" @click="addType(type)">Créer</label>
            <label class="btn btn-active" for="side-drawer">Annuler</label>
          </div>
        </div>
      </div>

      <div v-if="typeAction === 'read'">
        <h1 class="font-bold text-xl uppercase mb-6">Détail du type : {{ type.nom }}</h1>
        <div class="w-4/5 mx-auto">
          <div class="liste-conditions mb-10">
            <div class="flex flex-col mb-2">
              <h1 class="text-2xl text-gray-700 text-left">Liste des compétences liées a cette classe</h1>
              <TableComponent>
                <template v-slot:thead>
                  <th scope="col" class="text-left">#</th>
                  <th scope="col" class="text-left">Nom</th>
                  <th scope="col" class="text-left">Description</th>
                </template>
                <template v-slot:tbody>
                  <tr v-for="condition in type.condition" :key="condition.id" class="">
                    <td class="text-left">{{ condition.id }}</td>
                    <td class="text-left">{{ condition.nom }}</td>
                    <td class="text-left">{{ condition.description }}</td>
                  </tr>
                </template>
              </TableComponent>
            </div>
          </div>
          <div class="liste-cartes">
            <div class="flex flex-col mb-2">
              <h1 class="text-2xl text-gray-700 text-left">Liste des cartes liées a ce type</h1>
              <TableComponent>
                <template v-slot:thead>
                  <th scope="col" class="text-left">#</th>
                  <th scope="col" class="text-left">Nom</th>
                </template>
                <template v-slot:tbody>
                  <tr v-for="carte in type.carte" :key="carte.id" class="">
                    <td class="text-left">{{ carte.id }}</td>
                    <td class="text-left">{{ carte.nom }}</td>
                  </tr>
                </template>
              </TableComponent>
            </div>
          </div>

          <label class="btn btn-active" for="side-drawer">Fermer</label>
        </div>
      </div>
    </template>
  </RightDrawer>
</template>

<script>
import TableComponent from "@/components/Administration/Table/TableComponent.vue";
import RightDrawer from "@/components/Administration/RightDrawer.vue";
import InputComponent from "@/components/Administration/InputComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  name: "ViewClasses",

  data() {
    return {
      listeTypes: [],
      typeAction: null,
      type: {},
    }
  },

  components: {
    ModalComponent,
    InputComponent,
    RightDrawer,
    TableComponent,
  },

  methods: {
    async resetData(){
      this.typeAction = null;
      this.type = {};
      await this.getAllTypes();
    },

    async openRightDrawer(type_action, type){
      this.typeAction = type_action;

      if(type !== null){
        this.type = type;
      }else{
        this.type = {};
      }

      if(type_action === 'read') {
        await this.getTypeDetails(type);
      }
    },

    openModal(type){
      this.type = type;
    },

    async closeRightDrawerOrModal(){
      await this.resetData();
    },

    /**
     * Fonction qui permet de récupèrer tous les types grâce a l'API
     * @returns {Promise<void>}
     */
    async getAllTypes() {
      try {
        const response = await fetch("http://localhost:3000/types");
        this.listeTypes = await response.json();
      } catch (e) {
        console.log(e)
      }
    },

    async getTypeDetails(type) {
      try {
        const response = await fetch(`http://localhost:3000/types/${type.id}`)
        this.type = await response.json();
      }catch (e) {
        console.log(e)
      }
    },

    /**
     * Fonction qui permet de modifier le nom d'un type grâce a l'API
     * @returns {Promise<void>}
     * @param type
     */
    async updateClasse(type) {
      try{
        const response = await fetch(`http://localhost:3000/types`, {
          method: "PUT",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(type)
        });
        console.log(response);
      }catch (e) {
        console.log(e)
      }
      await this.resetData();
    },

    /**
     * Fonction qui permet de supprimer un type grâce a l'API
     * @returns {Promise<void>}
     * @param type
     */
    async deleteType(type) {
      try{
        const response = await fetch(`http://localhost:3000/types/${type.id}`, {
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

    /**
     * Fonction permet de créer un type grâce a l'API
     * @returns {Promise<void>}
     * @param type
     */
    async addType(type) {
      try{
        const response = await fetch(`http://localhost:3000/types`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(type)
        });
        console.log(response);
      }catch (e) {
        console.log(e)
      }
      await this.resetData();

    },
  },

  mounted() {
    this.getAllTypes();
  }
}
</script>

<style scoped>

</style>
