<template>
  <h1>Show a pokemon: #{{ id }}</h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  name: "ShowPokemon",

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      pokemon: null,
    };
  },

  created() {
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        const pokemon = await (
          await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        ).json();
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push("/");
        console.log("pokemon not found");
      }
    },
  },

  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>

<style></style>
