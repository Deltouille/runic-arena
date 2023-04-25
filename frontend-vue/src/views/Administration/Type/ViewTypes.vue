<template>
  <div class="w-full">
    <ModalComponent title="Classe" v-if="showModal" @close="closeModal()">
      <div class="flex flex-col gap-5" v-if="typeModal === 'delete_modal'">
        <p>Voulez-vous vraiment supprimer le type <b>{{ type.nom }}</b> ?</p>
        <p>Vous supprimerez aussi toutes les cartes associèes a ce type.</p>
        <div class="flex justify-center gap-4">
          <button class="px-4 py-2 border-red-500 border-2 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-200 font-semibold" @click="deleteType(type)">Supprimer</button>
          <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold" @click="showModal = false">Annuler</button>
        </div>
      </div>
      <div class="flex flex-col gap-5 px-4" v-if="typeModal === 'update_modal'">
        <div class="flex flex-col gap-5">
          <InputComponent title="Nom du type" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'nom') }" :value="type.nom"/>
        </div>
        <div class="flex justify-center gap-4">
          <button class="px-4 py-2 border-green-500 border-2 text-green-500 rounded hover:bg-green-500 hover:text-white transition-colors duration-200 font-semibold" @click="updateType(type)">Modifier</button>
          <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold" @click="showModal = false">Annuler</button>
        </div>
      </div>
      <div class="flex flex-col gap-5 px-4" v-if="typeModal === 'add_modal'">
        <div class="flex flex-col">
          <InputComponent title="Nom du type" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'nom') }"/>
        </div>
        <div class="flex justify-center gap-4">
          <button class="px-4 py-2 border-green-500 border-2 text-green-500 rounded hover:bg-green-500 hover:text-white transition-colors duration-200 font-semibold" @click="addType(type)">Ajouter</button>
          <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold" @click="showModal = false">Annuler</button>
        </div>
      </div>
    </ModalComponent>

    <h1 class="text-4xl mb-10 font-bold">Administration des classes</h1>
    <div class="flex w-full gap-5">
      <div class="w-1/2 bg-white shadow rounded p-4">
        <div class="flex justify-between mb-2">
          <h2 class="text-xl font-semibold">Liste des classes</h2>
          <button class="border-green-600 border-2 text-green-500 hover:text-white hover:bg-green-600 shadow hover:scale-105 duration-200 p-1 rounded-full" @click="openModal(null, 'add_modal', showModal)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <TableComponent>
          <template v-slot:thead>
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">#</th>
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">Nom</th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center"></th>
          </template>
          <template v-slot:tbody>
            <tr v-for="type in listeTypes" :key="type.id" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-left">{{ type.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900 text-left">{{ type.nom }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex space-x-2 justify-center">
                <button class="border-red-600 border-2 text-red-500 hover:text-white hover:bg-red-600 shadow hover:scale-105 duration-200 p-1 rounded-full" @click="openModal(type, 'delete_modal', showModal)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
                <button class="border-blue-600 border-2 text-blue-500 hover:text-white hover:bg-blue-600 shadow hover:scale-105 duration-200 p-1 rounded-full" @click="openModal(type, 'update_modal', showModal)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                </button>
                <button class="border-amber-600 border-2 text-amber-500 hover:text-white hover:bg-amber-600 shadow hover:scale-105 duration-200 p-1 rounded-full" @click="getData(type)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </td>
            </tr>
          </template>
        </TableComponent>
      </div>
      <div class="w-1/2 bg-white shadow rounded p-4">
        <h2 class="text-xl font-semibold text-left mb-2">Liste des conditions liées a la classe : </h2>
        <TableComponent>
          <template v-slot:thead>
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">#</th>
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">Nom</th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">Description</th>
          </template>
          <template v-slot:tbody>
            <tr v-for="condition in infoType.condition" :key="condition.id" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-left">{{ condition.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900 text-left">{{ condition.nom }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900 text-left">{{ condition.description }}</td>
            </tr>
          </template>
        </TableComponent>
      </div>
    </div>
    <div class="w-full mt-5 bg-white rounded p-4 shadow">
      <h2 class="text-xl font-semibold">Liste des cartes associèes au type : {{ type.nom }}</h2>
      <div class="grid grid-cols-4 mt-5">
        <CardComponent v-for="carte in infoType.carte" :key="carte.id" :data="carte"/>
      </div>
    </div>
  </div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
import TableComponent from "@/components/Administration/Table/TableComponent.vue";
import InputComponent from "@/components/Administration/InputComponent.vue";
import CardComponent from "@/components/Administration/CardComponent.vue";

export default {
  name: "ViewTypes",
  components: {CardComponent, InputComponent, ModalComponent,TableComponent},
  data(){
    return {
      listeTypes: [],
      showModal: false,
      typeModal: null,
      type: {},
      infoType: {}
    }
  },
  methods: {
    openModal(type, type_modal, showModal) {
      if(type !== null){
        this.type = type;
      }
      this.typeModal = type_modal;
      this.showModal = !showModal;
    },

    closeModal(){
      this.resetDataVariables();
    },

    addPropertyToCompetenceObject(value, propriete) {
      this.type[propriete] = value;
    },

    async resetDataVariables() {
      this.showModal = false;
      this.typeModal = null;
      this.type = [];
      await this.getAllTypes();
    },

    async getData(type) {
      try {
        const response = await fetch(`http://localhost:3000/types/${type.id}`);
        this.infoType = await response.json();
        console.log(this.infoType);
      } catch (e) {
        console.log(e)
      }
    },

    async getAllTypes() {
      try {
        const response = await fetch("http://localhost:3000/types");
        const data = await response.json();
        this.listeTypes = data;
      } catch (e) {
        console.log(e)
      }
    },

    async deleteType(type) {
      try{
        const response = await fetch(`http://localhost:3000/types/${type.id}`, {method: "DELETE"});
        console.log(response);
      }catch (e) {
        console.log(e)
      }
      await this.resetDataVariables();
    },

    async updateType(type) {
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
      await this.resetDataVariables();
    },

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
      await this.resetDataVariables();

    },

  },
  mounted() {
    this.getAllTypes();
  }
}

</script>