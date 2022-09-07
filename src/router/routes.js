import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /*webpackChunkName: "ListPokemons"*/ "@/modules/pokemon/pages/List"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /*webpackChunkName: "AboutPokemon"*/ "@/modules/pokemon/pages/About"
      ),
  },
  {
    path: "/id",
    component: () =>
      import(
        /*webpackChunkName: "ShoePokemon"*/ "@/modules/pokemon/pages/Show"
      ),
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
