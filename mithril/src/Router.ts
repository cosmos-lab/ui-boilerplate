import { isLoggedIn } from "@state/Auth";
const map = {
  "/": {
    view: "Dashboard",
  },
  "/test": {
    view: "Test",
  },
};

const routes = {};
for (const [key, row] of Object.entries(map)) {
  routes[key] = {
    onmatch: async () => {
      if (!isLoggedIn()) {
        row.view = "Welcome";
      }
      const component = await import(`@views/${row.view}`);
      return component.default;
    },
  };
}

export default routes;
