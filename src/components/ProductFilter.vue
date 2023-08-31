<template>
  <v-container class="max-width-container">
    <v-select
      class="select"
      label="Select category"
      :items="categories"
      v-model="selectedCategory"
      @change="handleCategoryChange(selectedCategory)"
    />
  </v-container>
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
.select {
  max-width: 350px;
  margin-top: 20px;
}

::v-deep .v-select__selection {
  text-transform: capitalize;
}

::v-deep .v-list-item__title {
  text-transform: capitalize;
}
</style>
