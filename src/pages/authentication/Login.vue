<template>
  <v-card
    class="pa-6"
    max-width="400"
    elevation="12"
    rounded
    outlined
  >
    <v-card-title class="justify-center headline font-weight-bold mb-6">
      Welcome Back
    </v-card-title>

    <v-card-text class="d-flex flex-column gap-4">
      <v-text-field
        label="Email"
        placeholder="Enter your email"
        hide-details="auto"
        outlined
        dense
      />
      <v-text-field
        label="Password"
        placeholder="Enter your password"
        type="password"
        hide-details="auto"
        outlined
        dense
        class="pt-2"
      />
      <v-btn color="primary" block large class="mt-4">Login</v-btn>
    </v-card-text>

    <v-card-actions class="justify-center mt-6 gap-4">
      <v-btn text small>Forgot Password?</v-btn>
      <v-btn text small>Sign Up</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>
