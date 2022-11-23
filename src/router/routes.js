import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /*webpackChunkName: "ListPokemons"*/ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "",
        name: "pokemon-home",
        component: () =>
          import(
            /*webpackChunkName: "ListPokemons"*/ "@/modules/pokemon/pages/List"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName: "AboutPokemon"*/ "@/modules/pokemon/pages/About"
          ),
      },
      {
        path: ":id",
        name: "pokemon-id",
        component: () =>
          import(
            /*webpackChunkName: "ShowPokemon"*/ "@/modules/pokemon/pages/Show"
          ),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
    ],
  },
  {
    path: "/dbz",
    name: "dbz",
    component: () =>
      import(/*webpackChunkName: "DbzHome"*/ "@/modules/dbz/layouts/DbzLayout"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /*webpackChunkName: "DbzCharacters"*/ "@/modules/dbz/pages/CharactersPage"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(
            /*webpackChunkName: "AboutDbz"*/ "@/modules/dbz/pages/AboutPage"
          ),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
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
