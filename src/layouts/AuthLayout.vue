<template>
  <v-app>
    <!-- Top App Bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>MyApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/home">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/profile">Profile</v-btn>
    </v-app-bar>

    <!-- Navigation Drawer + Content -->
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <!-- Main Content -->
          <v-col>
            <v-container fluid>
              <router-view />
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AuthLayoutPage",
};
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
