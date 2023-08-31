<template>
  <v-container class="list">
    <v-row
      class="pa-0"
      tag="ul"
    >
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        tag="li"
        :key="product.id"
        v-for="product in products"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "./ProductCard.vue"
export default {
  name: "ProductList",
  components: {
    ProductCard
  },

  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.list {
  max-width: 1224px;
  margin: 20px auto;
  padding: 0;
}
</style>
