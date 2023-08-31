<template>
  <v-container class="container max-width-container">
    <v-row class="mt-10">
      <v-col
        class="pa-0"
        cols="4"
      >
        <v-carousel
          class="rounded-lg"
          height="400"
          :hide-delimiters="true"
        >
          <v-carousel-item
            :key="index"
            v-for="(image, index) in product.images"
          >
            <v-img
              class="rounded-lg"
              height="400"
              :src="image"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col
        class="py-0 px-5"
        cols="8"
      >
        <h2 class="text-h6 text-md-h5 text-lg-h4">{{ product.title }}</h2>

        <div class="block-info">
          <p class="mb-0 grey--text">
            Category: <span>{{ product.category }}</span>
          </p>
          <p class="mb-0 grey--text">
            Brand: <span>{{ product.brand }}</span>
          </p>
        </div>

        <div class="price mt-10">
          <p class="price--discounted">
            {{ (product.price * (1 - product.discountPercentage / 100)).toFixed(2) }} $
          </p>
          <s class="price--old">{{ product.price.toFixed(2) }} $</s>
        </div>

        <v-rating
          class="rating"
          color="primary"
          :half-increments="true"
          :value="product.rating"
          :readonly="true"
        />
      </v-col>
    </v-row>

    <p class="description">{{ product.description }}</p>
  </v-container>
</template>

<script>
export default {
  name: "ProductPage",

  data() {
    return {
      product: {}
    }
  },

  created() {
    this.loadProductData()
  },

  methods: {
    async loadProductData() {
      const projectId = this.$route.params.id
      try {
        const response = await fetch(`https://dummyjson.com/products/${projectId}`)
        if (response.ok) {
          const data = await response.json()
          this.product = data
        } else {
          console.error("Failed to fetch product data")
        }
      } catch (error) {
        console.error("Error fetching product data:", error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 20px auto;
  padding: 0;
}

.block-info {
  margin-top: 10px;
  span {
    color: black;
    text-transform: capitalize;
  }
}

.price {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  &--discounted {
    margin: 0 !important;
    font-size: 18px;
    color: #f57c00;
  }
  &--old {
    margin: 0 0 0 5px;
    font-size: 16px;
    text-decoration: line-through;
    color: #616161;
  }
}

.rating {
  margin-left: -8px;
}

.description {
  margin-top: 20px;
}
</style>
