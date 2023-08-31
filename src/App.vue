<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <v-container class="max-width-container">
        <v-row justify="space-between">
          <v-toolbar-title>
            <router-link
              to="/"
              class="white--text"
            >
              Vue List
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            to="/"
            text
          >
            Home
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer
      class="mt-10"
      color="primary"
    >
      <v-container class="max-width-container text-center">
        <span class="white--text">&copy; 2023 Aganov David</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App"
}
</script>
