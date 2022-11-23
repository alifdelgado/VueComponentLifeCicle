import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(
        /*webpackChunkName: "ListPokemons"*/ "@/modules/pokemon/pages/List"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /*webpackChunkName: "AboutPokemon"*/ "@/modules/pokemon/pages/About"
      ),
  },
  {
    path: "/pokemon/:id",
    name: "pokemon-id",
    component: () =>
      import(
        /*webpackChunkName: "ShoePokemon"*/ "@/modules/pokemon/pages/Show"
      ),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NotFoundPage"*/ "@/modules/shared/pages/NotFound"
      ),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
