<template>
  <div>
    {{ $store.state.counter.count }}
    <v-btn color="secondary" @click="increment">+</v-btn>
    <v-btn color="primary" @click="decrement">-</v-btn>
    <v-btn @click="testing()">testing</v-btn>

    <v-container class="pt-10 w-100">
      <v-card>
        <v-card-title>
          <v-data-table
            :headers="headers"
            :items="data_items"
            v-model="selected_data"
            items-per-page="10"
            server-items-length="10"
          >
          </v-data-table>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      data_items: [],
      selected_data: null,
      headers: [
        { text: "ID", value: "value" },
        { text: "Name", value: "text" },
      ],
    };
  },

  mounted() {
    this.testing();
  },

  methods: {
    increment() {
      // With namespaced modules, use 'counter/increment'
      this.$store.commit("counter/increment");
    },
    decrement() {
      this.$store.commit("counter/decrement");
    },
    async testing() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user/test");
        this.data_items = response.data;
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
