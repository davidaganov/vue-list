<template>
  <div>
    <v-container class="select max-width-container">
      <v-row
        class="mt-6"
        justify="space-between"
        align="end"
      >
        <v-col
          class="ma-0 pa-0"
          cols="12"
          md="5"
        >
          <ProductFilter
            class="ma-0 pa-0"
            :categories="categories"
            @categoryChanged="handleCategoryChange"
          />
        </v-col>
        <v-col
          class="ma-0 pa-0"
          cols="12"
          md="5"
        >
          <ProductSearch
            class="ma-0 pa-0"
            @search="handleSearch"
          />
        </v-col>
      </v-row>
    </v-container>

    <div v-if="products.length > 0">
      <ProductList :products="products" />
      <ProductPagination
        :skip="skip"
        :total="total"
        :limit="limit"
        @currentPage="handleUpdatePage"
      />
    </div>

    <v-container
      class="max-width-container text-center mt-15"
      v-if="products.length === 0 && loading"
    >
      <h2 class="text-h6 text-md-h5 text-lg-h4">Loading...</h2>
    </v-container>

    <v-container
      class="max-width-container text-center mt-15"
      v-if="products.length === 0 && !loading"
    >
      <h2 class="text-h6 text-md-h5 text-lg-h4">Products Not Found</h2>
    </v-container>
  </div>
</template>

<script>
import ProductFilter from "./ProductFilter.vue"
import ProductSearch from "./ProductSearch.vue"
import ProductList from "./ProductList.vue"
import ProductPagination from "./ProductPagination.vue"

export default {
  name: "HomePage",
  components: {
    ProductFilter,
    ProductSearch,
    ProductList,
    ProductPagination
  },

  data() {
    return {
      loading: true,
      products: [],
      limit: 8,
      skip: 0,
      total: 0,
      selectedCategory: null,
      search: null,
      categories: []
    }
  },

  mounted() {
    // Get a list of categories
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        this.categories = ["all categories", ...data]
      })
      .catch((error) => {
        console.error("Error loading categories:", error)
      })

    // Upload the initial data
    this.loadData()
  },

  methods: {
    updateData() {
      this.skip = 0 // Resetting the page counter when changing the category
      this.loadData()
    },

    handleCategoryChange(category) {
      this.selectedCategory = category
      this.updateData()
    },

    handleSearch(text) {
      this.search = text
      this.updateData()
    },

    // Method to handle page update triggered by pagination controls
    handleUpdatePage(newPage) {
      this.skip = newPage
      this.loadData()
    },

    // Method to fetch data from a remote API
    loadData() {
      let url = `https://dummyjson.com/products?limit=${this.limit}&skip=${this.skip}`

      if (this.selectedCategory && this.selectedCategory !== "all categories") {
        url = `https://dummyjson.com/products/category/${this.selectedCategory}?limit=${this.limit}&skip=${this.skip}`
      } else if (this.search) {
        url = `https://dummyjson.com/products/search?q=${this.search}`
      }

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.loading = false
          this.products = data.products
          this.skip = data.skip
          this.total = data.total
        })
        .catch((error) => {
          console.error("Error loading data:", error)
          this.loading = false
        })
    }
  }
}
</script>

<style scoped lang="scss">
.select {
  @media (max-width: 1200px) {
    padding: 0 12px;
  }
}
</style>
