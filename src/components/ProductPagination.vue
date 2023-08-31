<template>
  <v-container class="pagination max-width-container">
    <v-pagination
      :length="visiblePages"
      :total-visible="7"
      v-model="currentPage"
    />
  </v-container>
</template>

<script>
export default {
  name: "ProductPagination",

  data() {
    return {
      currentPage: 1
    }
  },

  props: {
    limit: { type: Number, required: true },
    total: { type: Number, required: true }
  },

  computed: {
    // Calculate total number of pages
    visiblePages() {
      return Math.ceil(this.total / this.limit)
    }
  },

  watch: {
    // Watch for changes in the current page
    currentPage(newPage) {
      // Load data for the newly selected page
      this.loadPage((newPage - 1) * this.limit)
    }
  },

  methods: {
    // Method to load data for a specific page based on skip value
    loadPage(newSkip) {
      // Ensure the new skip value is within valid range
      if (newSkip >= 0 && newSkip < this.total) {
        // Calculate the corresponding page for the new skip value
        this.currentPage = Math.floor(newSkip / this.limit) + 1
        // Emit an event to notify the parent component about the new page
        this.$emit("currentPage", newSkip)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pagination {
  margin-top: 20px;
  ::v-deep .v-pagination__more {
    width: 34px;
    height: 34px;
  }
}
</style>
