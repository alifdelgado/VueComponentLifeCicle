<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon list</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 1 } }"
      >Show pokemon</router-link
    >
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },

  data() {
    return {
      links: [
        { to: "pokemon-home", name: "Pokemons" },
        { to: "pokemon-id", name: "Por id", id: 50 },
        { to: "pokemon-about", name: "About" },
        { to: "dbz-characters", name: "Personajes" },
        { to: "dbz-about", name: "About DBZ" },
        { to: "https://google.com", name: "Google" },
      ],
    };
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

/* div a.router-link-exact-active {
  color: #42b983;
} */
</style>
