<template>
  <div class="w-4/5">
    <h1 class="text-4xl mb-10">Administration des types</h1>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow rounded">
            <table class="min-w-full border shadow">
              <thead class="bg-gray-200">
              <tr class="">
                <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                  #
                </th>
                <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                  Nom
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">

                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="type in listeTypes" :key="type.id" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">{{ type.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">{{ type.nom }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:scale-105 hover:text-red-600 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:scale-105 hover:text-blue-600 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewTypes",
  data() {
    return {
      listeTypes: []
    }
  },
  methods: {
    async getAllTypes() {
      try {
        const response = await fetch("http://localhost:3000/types");
        const data = await response.json();
        this.listeTypes = data;
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.getAllTypes()
  }
}
</script>

<style scoped>

</style>