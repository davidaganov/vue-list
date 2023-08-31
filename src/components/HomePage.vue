<template>
  <div>
    <ProductFilter
      :categories="categories"
      @categoryChanged="handleCategoryChange"
    />
    <ProductList :products="products" />
    <ProductPagination
      :skip="skip"
      :total="total"
      :limit="limit"
      @currentPage="handleUpdatePage"
    />
  </div>
</template>

<script>
import ProductFilter from "./ProductFilter.vue"
import ProductList from "./ProductList.vue"
import ProductPagination from "./ProductPagination.vue"

export default {
  name: "HomePage",
  components: {
    ProductList,
    ProductPagination,
    ProductFilter
  },

  data() {
    return {
      products: [],
      limit: 8,
      skip: 0,
      total: 0,
      selectedCategory: null,
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
    handleCategoryChange(category) {
      this.selectedCategory = category
      this.skip = 0 // Resetting the page counter when changing the category
      this.loadData()
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
      }

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.products = data.products
          this.skip = data.skip
          this.total = data.total
        })
        .catch((error) => {
          console.error("Error loading data:", error)
        })
    }
  }
}
</script>
