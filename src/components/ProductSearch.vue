<template>
  <v-text-field
    v-model="value"
    label="Search..."
    placeholder="iPhone 9"
    type="text"
    append-outer-icon="mdi-magnify"
    :clearable="true"
    @click:append-outer="handleSearch"
    @click:clear="handleClear"
  />
</template>

<script>
export default {
  name: "ProductSearch",

  data() {
    return {
      value: null
    }
  },

  methods: {
    handleClear() {
      this.value = null
      this.handleSearch()
    },

    handleSearch() {
      this.$emit("search", this.value)
    }
  }
}
</script>

<style scoped lang="scss"></style>
