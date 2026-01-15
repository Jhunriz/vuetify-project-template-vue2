<template>
  <div>
    {{ $store.state.count }}
    <v-btn @click="increment">+</v-btn>
    <v-btn @click="decrement">-</v-btn>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>
