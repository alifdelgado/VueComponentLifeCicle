import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticated from "./auth-guard";

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
    beforeEnter: [isAuthenticated],
    component: () =>
      import(/*webpackChunkName: "DbzHome"*/ "@/modules/dbz/layouts/DbzLayout"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        beforeEnter: [isAuthenticated],
        component: () =>
          import(
            /*webpackChunkName: "DbzCharacters"*/ "@/modules/dbz/pages/CharactersPage"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        beforeEnter: [isAuthenticated],
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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const rand = Math.random() * 100;
//   if (rand > 50) {
//     console.log("authenticated");
//     next();
//   } else {
//     console.log(rand, "blocked by guard");
//     next({ name: "pokemon-home" });
//   }
// });

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const rand = Math.random() * 100;
//     if (rand > 50) {
//       console.log("authenticated");
//       resolve(true);
//     } else {
//       console.log(rand, "blocked by guard - canAccess");
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();
//   authorized ? next() : next({ name: "pokemon-home" });
// });

export { router };
