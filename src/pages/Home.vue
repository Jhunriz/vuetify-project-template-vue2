<template setup lang="js">
    <div>
        {{ $store.state.count }}
        <v-btn color="secondary" @click="increment">+</v-btn>
        <v-btn color="primary" @click="decrement">-</v-btn>        
    </div>
</template>

<script>
export default {
  // name below was the component name to know what the component was named
  // Note the Home file name and route should be not the same
  name: "HomePage",

  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
