<template>
  <div class="w-full">
    <ModalComponent title="Classe" v-if="showModal" @close="showModal = false">
      <div class="flex flex-col gap-5" v-if="typeModal === 'delete_modal'">
        <p>Voulez-vous vraiment supprimer la classe ... ?</p>
        <p>Vous supprimerez aussi toutes les cartes associèes a cette classe.</p>
        <div class="flex justify-center gap-4">
          <button class="px-4 py-2 border-red-500 border-2 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-200 font-semibold" @click="deleteCompetence(competence)">Supprimer</button>
          <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold" @click="showModal = false">Annuler</button>
        </div>
      </div>

      <div class="flex flex-col gap-5 px-4" v-if="typeModal === 'update_modal'">
        <div class="flex flex-col gap-5 px-4">
          <InputComponent title="Nom" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'nom') }"/>
          <InputComponent title="Description" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'description') }"/>
          <InputComponent title="Type" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'type') }"/>
          <InputComponent title="effet" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'effet') }"/>
          <InputComponent title="valeur" type="number" @update="(e) => { addPropertyToCompetenceObject(e, 'valeur') }"/>
        </div>
        <div class="flex justify-center gap-4">
          <button class="px-4 py-2 border-green-500 border-2 text-green-500 rounded hover:bg-green-500 hover:text-white transition-colors duration-200 font-semibold" @click="updateType(typeId, newTypeName)">Modifier</button>
          <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold" @click="showModal = false">Annuler</button>
        </div>
      </div>

      <div class="flex flex-col gap-5 px-4" v-if="typeModal === 'add_modal'">
        <InputComponent title="Nom" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'nom') }"/>
        <InputComponent title="Description" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'description') }"/>
        <InputComponent title="Type" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'type') }"/>
        <InputComponent title="effet" type="text" @update="(e) => { addPropertyToCompetenceObject(e, 'effet') }"/>
        <InputComponent title="valeur" type="number" @update="(e) => { addPropertyToCompetenceObject(e, 'valeur') }"/>
        <div class="flex justify-center gap-4">
          <button class="px-4 py-2 border-green-500 border-2 text-green-500 rounded hover:bg-green-500 hover:text-white transition-colors duration-200 font-semibold" @click="addCompetence(competence)">Ajouter</button>
          <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold" @click="showModal = false">Annuler</button>
        </div>
      </div>
    </ModalComponent>
    <h1 class="text-4xl mb-10 font-bold">Administration des compétences</h1>
    <div class="flex flex-col w-full gap-5">
      <div class="bg-white shadow rounded p-4">
        <div class="flex justify-between mb-2">
          <h2 class="text-xl font-semibold">Liste des compétences</h2>
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
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">Description</th>
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">Type</th>
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">Effet</th>
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">Valeur</th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center"></th>
          </template>
          <template v-slot:tbody>
            <tr v-for="competence in listeCompetences" :key="competence.id" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-left">{{ competence.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900 text-left">{{ competence.nom }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900 text-left">{{ competence.description }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900 text-left">{{ competence.type }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900 text-left">{{ competence.effet }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900 text-left">{{ competence.valeur }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex space-x-2 justify-center">
                <button class="border-red-600 border-2 text-red-500 hover:text-white hover:bg-red-600 shadow hover:scale-105 duration-200 p-1 rounded-full" @click="openModal(competence, 'delete_modal', showModal)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>

                <button class="border-blue-600 border-2 text-blue-500 hover:text-white hover:bg-blue-600 shadow hover:scale-105 duration-200 p-1 rounded-full" @click="openModal(competence, 'update_modal', showModal)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                </button>

                <button class="border-amber-600 border-2 text-amber-500 hover:text-white hover:bg-amber-600 shadow hover:scale-105 duration-200 p-1 rounded-full" @click="getData(competence)">
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
    </div>
  </div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
import TableComponent from "@/components/Administration/Table/TableComponent.vue";
import InputComponent from "@/components/Administration/InputComponent.vue";
export default {
  name: "ViewCompetence",
  data() {
    return {
      listeCompetences: [],
      competence: {},
      typeModal: null,
      showModal: false,
    }
  },

  components: {
    ModalComponent,
    TableComponent,
    InputComponent,
  },

  methods: {
    async resetDataVariables() {
      this.showModal = false;
      this.typeModal = null;
      this.competence = {};
      this.listeCompetences = [];
      await this.getAllCompetences();
    },

    async getAllCompetences() {
      try {
        const response = await fetch("http://localhost:3000/competences");
        const data = await response.json();
        this.listeCompetences = data;
      } catch (e) {
        console.log(e)
      }
    },

    async deleteCompetence(competence) {
      try{
        const response = await fetch(`http://localhost:3000/competences/${competence.id}`, {
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
      await this.resetDataVariables();
    },

    async addCompetence(competence){
      try{
        const response = await fetch(`http://localhost:3000/competences`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(competence)
        });
        console.log(response);
      }catch (e) {
        console.log(e)
      }

      await this.resetDataVariables();

    },

    openModal(competence, type_modal, showModal) {
      if(competence !== null){
        this.competence = competence;
      }
      this.typeModal = type_modal;
      this.showModal = !showModal;
    },

    addPropertyToCompetenceObject(value, propriete) {
      this.competence[propriete] = value;
    },
  },

  mounted(){
    this.getAllCompetences();
  }
}
</script>

<style scoped>

</style>
