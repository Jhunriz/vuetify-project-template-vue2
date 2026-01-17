<template>
  <div>
    {{ $store.state.counter.count }}
    <v-btn color="secondary" @click="increment">+</v-btn>
    <v-btn color="primary" @click="decrement">-</v-btn>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  methods: {
    increment() {
      // With namespaced modules, use 'counter/increment'
      this.$store.commit("counter/increment");
    },
    decrement() {
      this.$store.commit("counter/decrement");
    },
  },
};
</script>