<template>
  <h1>About page</h1>
  <hr />
  <h2 v-text="name"></h2>
  <button @click="onChangeName">Change name</button>
</template>

<script>
export default {
  name: "AboutPokemon",

  data() {
    return {
      name: "Spike",
    };
  },

  methods: {
    onChangeName() {
      this.name = "Julia";
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>

<style></style>
