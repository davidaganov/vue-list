<template>
  <v-select
    class="select"
    label="Select category"
    :items="categories"
    v-model="selectedCategory"
    @change="handleCategoryChange(selectedCategory)"
  />
</template>

<script>
export default {
  name: "ProductFilter",

  data() {
    return {
      selectedCategory: null
    }
  },

  props: {
    categories: { type: Array, required: true }
  },

  methods: {
    // Choosing a category
    handleCategoryChange(category) {
      this.$emit("categoryChanged", category)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .v-select__selection {
  text-transform: capitalize;
}

::v-deep .v-list-item__title {
  text-transform: capitalize;
}
</style>
