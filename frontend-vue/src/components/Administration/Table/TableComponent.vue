<template>
  <table class="w-full p-4">
    <TableHead>
        <slot name="thead"></slot>
    </TableHead>
    <TableBody>
      <slot name="tbody"></slot>
    </TableBody>
  </table>
</template>

<script>
import TableHead from "@/components/Administration/Table/TableHead.vue";
import TableBody from "@/components/Administration/Table/TableBody.vue";
export default {
  name: "TableComponent",
  components: {
    TableBody,
    TableHead
  }
}
</script>

<style scoped>

</style>
