<template>
  <v-card class="card fill-height">
    <v-carousel
      class="rounded-t"
      height="200"
      :cycle="false"
      :continuous="false"
      :show-arrows-on-hover="true"
      :hide-delimiters="true"
    >
      <v-carousel-item
        :key="index"
        v-for="(image, index) in product.images"
      >
        <router-link :to="'/products/' + product.id">
          <v-img
            class="text-white rounded-t"
            height="200"
            :src="image"
            :lazy-src="product.thumbnail"
          />
        </router-link>
      </v-carousel-item>
    </v-carousel>

    <v-card-title class="card__title">
      <router-link :to="'/products/' + product.id"> {{ product.title }}</router-link>
    </v-card-title>
    <v-card-subtitle class="card__subtitle grey--text">{{ product.category }}</v-card-subtitle>
    <v-card-text class="card__text">{{ product.description }}</v-card-text>
    <div class="card__price">
      <p class="card__price--discounted">
        {{ (product.price * (1 - product.discountPercentage / 100)).toFixed(2) }} $
      </p>
      <s class="card__price--old">{{ product.price.toFixed(2) }} $</s>
    </div>

    <v-rating
      class="card__rating"
      color="primary"
      :small="true"
      :half-increments="true"
      :value="product.rating"
      :readonly="true"
    />
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  &__title,
  &__text {
    word-wrap: anywhere;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__title {
    max-height: 55px;
    -webkit-line-clamp: 1;
  }

  &__subtitle {
    padding-top: 10px;
  }

  &__text {
    height: 72px;
    max-height: 72px;
    -webkit-line-clamp: 3;
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
    padding: 10px 16px 0;
    &--discounted {
      margin: 0;
      font-size: 16px;
      color: #f57c00;
    }
    &--old {
      margin: 0 0 0 5px;
      font-size: 14px;
      text-decoration: line-through;
      color: #616161;
    }
  }

  &__rating {
    padding: 8px 16px 16px;
    ::v-deep button {
      padding: 3px;
      &:first-of-type {
        padding-left: 0px;
      }
    }
  }
}
</style>
