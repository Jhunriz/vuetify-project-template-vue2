<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        class="fill-height d-flex align-center justify-center"
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GuestLayout",
};
</script>

<style>
/* Full-screen reset */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
