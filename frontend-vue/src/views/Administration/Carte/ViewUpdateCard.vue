<template>
  <div>
    <ModalConditionComponent>
      <InputComponent type="text" title="Nom de la condition" @change="(e) => { condition.nom = e.target.value }" />
      <TextareaComponent title="Description de la condition" @change="(e) => { condition.description = e.target.value }"/>
      <SelectComponent title="Type de la condition" @change="(e) => { condition.effet = e.target.value }">
        <template #select-options>
          <option value="" selected>Selectionnez un type pour cette condition</option>
          <option value="Attaque">Attaque</option>
          <option value="Defend">Defend</option>
          <option value="Avantage">Avantage</option>
          <option value="Groupe">Groupe</option>
        </template>
      </SelectComponent>
      <div class="modal-action">
        <label for="modal-condition" class="btn btn-outline btn-primary" @click="addCondition(condition)">Ajouter</label>
        <label for="modal-condition" class="btn">Annuler</label>
      </div>
    </ModalConditionComponent>

    <h1 class="font-bold text-xl uppercase mb-6">Création d'une carte</h1>
    <div class="w-4/5 mx-auto">
      <form @submit.prevent="createCarte(carte)" enctype="multipart/form-data">
        <InputComponent type="text" title="Nom de la nouvelle carte" :value="data.nom" @change="(e) => { carte.nom = e.target.value }" />
        <FileInputComponent title="Illustration de la nouvelle carte" @change="(e) => { carte.illustration = e.target.files[0] }"/>
        <InputComponent type="number" title="Puissance de la nouvelle carte" @change="(e) => { carte.puissance = e.target.value }" />
        <SelectComponent title="Type de la nouvelle carte" :value="data.type_id" @change="(e) => { carte.type_id = e.target.value }">
          <template #select-options>
            <option value="" selected disabled>Selectionnez un type pour cette carte</option>
            <option v-for="type in listeTypes" :key="type.id" :value="type.id">{{ type.nom }}</option>
          </template>
        </SelectComponent>
        <SelectComponent title="Classe de la nouvelle carte" :value="data.classe_id" @change="(e) => { carte.classe_id = e.target.value }">
          <template #select-options>
            <option value="" selected>Selectionnez un type pour cette carte</option>
            <option v-for="classe in listeClasses" :key="classe.id" :value="classe.id">{{ classe.nom }}</option>
          </template>
        </SelectComponent>
        <h2 class="pt-5 text-left text-xl font-bold">Compétences actives</h2>
        <div class="flex flex-row w-full gap-5">
          <SelectComponent class="w-2/3" title="Première compétence active" :value="data.comp1" @change="(e) => { carte.comp1 = e.target.value }">
            <template #select-options>
              <option value="" selected>Selectionnez une première compétence active</option>
              <option v-for="competence in listeCompetences" :key="competence.id" :value="competence.id">{{ competence.nom }}</option>
            </template>
          </SelectComponent>
          <InputComponent class="w-1/3" type="number" title="Cout mana" :value="data.comp1_cout_mana" @change="(e) => { carte.comp1_cout_mana = e.target.value }"/>
        </div>

        <div class="flex flex-row w-full gap-5">
          <SelectComponent class="w-2/3" title="Deuxième compétence active" :value="data.comp2" @change="(e) => { carte.comp2 = e.target.value }">
            <template #select-options>
              <option value="" selected>Selectionnez une seconde compétence active</option>
              <option v-for="competence in listeCompetences" :key="competence.id" :value="competence.id">{{ competence.nom }}</option>
            </template>
          </SelectComponent>
          <InputComponent class="w-1/3" type="number" title="Cout mana" :value="data.comp2_cout_mana" @change="(e) => { carte.comp2_cout_mana = e.target.value }"/>
        </div>

        <h2 class="pt-5 text-left text-xl font-bold">Compétences passive</h2>
        <SelectComponent title="" :value="data.competence_passive_id" @change="(e) => { carte.competence_passive_id = e.target.value }">
          <template #select-options>
            <option value="" selected>Selectionnez une compétence passive</option>
            <option v-for="competence in listeCompetences" :key="competence.id" :value="competence.id">{{ competence.nom }}</option>
          </template>
        </SelectComponent>

        <h2 class="pt-5 text-left text-xl font-bold">Condition</h2>
        <SelectComponent :value="data.condition_id" @change="(e) => { carte.condition_id = e.target.value }">
          <template #select-options>
            <option value="" selected>Selectionnez une compétence passive</option>
            <option v-for="condition in listeConditions" :key="condition.id" :value="condition.id">{{ condition.nom }} - {{ condition.description }}</option>
          </template>
        </SelectComponent>
        <!--p v-if="condition.length !== 0">{{ condition.description }}</p-->
        <div class="text-left pt-4">
          <label class="btn btn-primary" for="modal-condition" @click="openModal(carte)">Créer une nouvelle condition</label>
        </div>
      </form>

      <div class="flex gap-5 justify-center mt-6">
        <label for="side-drawer">
          <button class="btn btn-outline btn-primary" type="submit" @click="updateCarte(carte)">Créer</button>
        </label>
        <label class="btn btn-active" for="side-drawer">Annuler</label>
      </div>
    </div>
  </div>
</template>

<script>
import ModalConditionComponent from "@/components/Administration/Modals/ModalConditionComponent.vue";
import InputComponent from "@/components/Administration/Input/InputComponent.vue";
import TextareaComponent from "@/components/Administration/Input/TextareaComponent.vue";
import SelectComponent from "@/components/Administration/Input/SelectComponent.vue";
import FileInputComponent from "@/components/Administration/Input/FileInputComponent.vue";

export default {
  name: "ViewUpdateCard",
  components: {FileInputComponent, SelectComponent, TextareaComponent, InputComponent, ModalConditionComponent},
  props: ['data'],
  data(){
    return {
      carte: {},
      condition: {},
      listeCompetences: [],
      listeTypes: [],
      listeClasses: [],
      listeConditions: []
    }
  },

  methods: {
    /**
     * Fonction qui récupère tout les types présents en base de données
     * @returns {Promise<void>}
     */
    async getTypes () {
      try {
        const response = await fetch("http://localhost:3000/types");
        this.listeTypes = await response.json();
      } catch (e) {
        console.log(e)
      }
    },

    /**
     * Fonction qui récupère toutes les classes présentes en base de données
     * @returns {Promise<void>}
     */
    async getClasses() {
      try {
        const response = await fetch("http://localhost:3000/classes");
        this.listeClasses = await response.json();
      } catch (e) {
        console.log(e)
      }
    },

    /**
     * Fonction qui récupère toutes les compétences présentes en base de données
     * @returns {Promise<void>}
     */
    async getCompetences() {
      try {
        const response = await fetch("http://localhost:3000/competences");
        this.listeCompetences = await response.json();
      } catch (e) {
        console.log(e)
      }
    },

    /**
     * Fonction qui récupère toutes les conditions présentes en base de données
     * @returns {Promise<void>}
     */
    async getConditions() {
      try {
        const response = await fetch("http://localhost:3000/conditions");
        this.listeConditions = await response.json();
      } catch (e) {
        console.log(e)
      }
    },

    /**
     * Fonction qui permet de créer une condition
     * @param condition
     * @returns {Promise<void>}
     */
    async addCondition(condition){
      console.log(condition)
      try {
        const response = await fetch(`http://localhost:3000/conditions`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(condition)
        });
        console.log(response);
        await this.getConditions();
      }catch (e){
        console.log(e);
      }
    },

    /**
     * Fonction qui permet de modifier une carte
     * @param carte
     * @returns {Promise<void>}
     */
    async updateCarte(carte) {
      const formData = new FormData();
      formData.append('nom', carte.nom);
      formData.append('illustration', carte.illustration);
      formData.append('puissance', carte.puissance);
      formData.append('type_id', carte.type_id);
      formData.append('classe_id', carte.classe_id);
      formData.append('comp1', carte.comp1);
      formData.append('comp1_cout_mana', carte.comp1_cout_mana);
      formData.append('comp2', carte.comp2);
      formData.append('comp2_cout_mana', carte.comp2_cout_mana);
      formData.append('competence_passive_id', carte.competence_passive_id);
      formData.append('condition_id', carte.condition_id)

      try {
        const response = await fetch(`http://localhost:3000/cards`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
          },
          body: formData
        });
        console.log(response);
      }catch (e){
        console.log(e);
      }
    },

    openModal(carte){
      this.carte = carte;
    },


  },

  async mounted() {
    this.carte = this.data();
    await this.getTypes();
    await this.getClasses();
    await this.getCompetences();
    await this.getConditions();
  }

}
</script>

<style scoped>

</style>
