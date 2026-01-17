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
      <!-- Error Alert -->
      <v-alert
        v-if="authError"
        type="error"
        dense
        dismissible
        @input="clearError"
      >
        {{ authError }}
      </v-alert>
      
      <!-- Login Form -->
      <v-form ref="form" @submit.prevent="handleLogin">
        <v-text-field
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          :rules="emailRules"
          hide-details="auto"
          outlined
          dense
          required
        />
        
        <v-text-field
          v-model="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          :rules="passwordRules"
          hide-details="auto"
          outlined
          dense
          class="pt-4"
          required
        />
        
        <v-btn 
          type="submit"
          color="primary" 
          block 
          large 
          class="mt-6"
          :loading="isLoading"
          :disabled="isLoading"
        >
          Login
        </v-btn>
      </v-form>
    </v-card-text>
    
    <v-card-actions class="justify-center mt-6 gap-4">
      <v-btn text small @click="goToForgotPassword">Forgot Password?</v-btn>
      <v-btn text small @click="goToSignUp">Sign Up</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "LoginPage",
  
  data() {
    return {
      email: '',
      password: '',
      
      // Validation rules
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 4 || 'Password must be at least 4 characters'
      ]
    }
  },
  
  computed: {
    ...mapGetters('auth', ['isLoading', 'authError'])
  },
  
  methods: {
    ...mapActions('auth', ['login', 'clearError']),
    
    async handleLogin() {
      // Validate form
      if (!this.$refs.form.validate()) {
        return
      }
      
      // Clear any previous errors
      this.clearError()
      
      // Attempt login
      const result = await this.login({
        email: this.email,
        password: this.password
      })
      
      // Handle success
      if (result.success) {
        // Redirect to dashboard or home
        this.$router.push('/dashboard')
      }
      // Error is already set in the store and will show in the alert
    },
    
    goToForgotPassword() {
      this.$router.push('/forgot-password')
    },
    
    goToSignUp() {
      this.$router.push('/register')
    }
  },
  
  // Clear error when component is destroyed
  beforeDestroy() {
    this.clearError()
  }
}
</script>