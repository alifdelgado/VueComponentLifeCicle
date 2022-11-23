const isAuthenticated = (to, from, next) => {
  return new Promise(() => {
    const rand = Math.random() * 100;
    if (rand > 50) {
      console.log("authenticated");
      next();
    } else {
      console.log("blocked by isAuthenticated guard", rand);
      next({ name: "pokemon-home" });
    }
  });
};

export default isAuthenticated;
