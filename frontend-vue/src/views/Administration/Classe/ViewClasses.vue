<template>
  <div class="w-full">
    <ModalComponent title="Classe" v-if="showModal" @close="showModal = false">
      <div class="flex flex-col gap-5" v-if="typeModal === 'delete_modal'">
        <p>Voulez-vous vraiment supprimer la classe ... ?</p>
        <p>Vous supprimerez aussi toutes les cartes associèes a cette classe.</p>
        <div class="flex justify-center gap-4">
          <button class="px-4 py-2 border-red-500 border-2 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-200 font-semibold" @click="deleteClasse(classeId)">Supprimer</button>
          <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold" @click="showModal = false">Annuler</button>
        </div>
      </div>

      <div class="flex flex-col gap-5 px-4" v-if="typeModal === 'update_modal'">
        <div class="flex flex-col">
          <label for="update-classe-name" class="text-left text-gray-900 font-bold">
            Nouveau nom
          </label>
          <input name="update-classe-name" type="text" class="border-2 border-gray-500 rounded px-4 py-2 focus:border-blue-600" @change="(e) => { newClassName = e.target.value }"/>
        </div>
        <div class="flex justify-center gap-4">
          <button class="px-4 py-2 border-green-500 border-2 text-green-500 rounded hover:bg-green-500 hover:text-white transition-colors duration-200 font-semibold" @click="updateClasse(classeId, newClassName)">Modifier</button>
          <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold" @click="showModal = false">Annuler</button>
        </div>
      </div>
    </ModalComponent>
    <h1 class="text-4xl mb-10 font-bold">Administration des classes</h1>
    <div class="flex w-full gap-5">
      <div class="w-1/2 bg-white shadow rounded p-4">
        <table class="w-full p-4">
          <thead class="bg-gray-200">
          <tr class="">
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">#</th>
            <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">Nom</th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="classe in listeClasse" :key="classe.id" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">{{ classe.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">{{ classe.nom }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:scale-105 hover:text-red-600 cursor-pointer" @click="openModal(classe.id, 'delete_modal', showModal)">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:scale-105 hover:text-blue-600 cursor-pointer" @click="openModal(classe.id, 'update_modal', showModal)">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="w-1/2 bg-white shadow rounded">
a
      </div>
    </div>
  </div>
</template>

<script>

import ModalComponent from "@/components/ModalComponent.vue";

export default {
  name: "ViewClasses",

  data() {
    return {
      listeClasse: [],
      classeId: null,
      newClassName: null,
      showModal: false,
      typeModal: null,
    }
  },

  components: {
    ModalComponent
  },

  methods: {
    /**
     * Fonction permettant de remettre les variables contenues dans data() par defaut
     * @returns {Promise<void>}
     */
    async resetDataVariables() {
      this.showModal = false;
      this.typeModal = null;
      this.classeId = null;
      this.newClassName = null;
      await this.getAllClasses();
    },

    /**
     * Fonction qui permet de récupèrer toutes les classes grâce a l'API
     * @returns {Promise<void>}
     */
    async getAllClasses() {
      try {
        const response = await fetch("http://localhost:3000/classes");
        this.listeClasse = await response.json();
      } catch (e) {
        console.log(e)
      }
    },

    /**
     * Fonction qui permet de supprimer une classe grâce a l'API
     * @param classe_id
     * @returns {Promise<void>}
     */
    async deleteClasse(classe_id) {
      try{
        const response = await fetch(`http://localhost:3000/classes/${classe_id}`, {
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

    /**
     * Fonction qui permet de modifier le nom d'une classe grâce a l'API
     * @param classe_id Integer
     * @param newClasseName String
     * @returns {Promise<void>}
     */
    async updateClasse(classe_id, new_classe_name) {
      const data = {
        classe_id, new_classe_name
      };

      try{
        const response = await fetch(`http://localhost:3000/classes`, {
          method: "PUT",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        console.log(response);
      }catch (e) {
        console.log(e)
      }
      await this.resetDataVariables();

    },

    openModal(classe_id, type_modal, showModal) {
      this.classeId = classe_id;
      this.typeModal = type_modal;
      this.showModal = !showModal;
    },


  },

  mounted() {
    this.getAllClasses()
  }
}
</script>

<style scoped>

</style>
