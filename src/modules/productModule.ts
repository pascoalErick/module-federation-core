export const productModule = {
  async getRoutes() {
    try {
      //@ts-ignore
      const routes = await import("ProductMF/Routes");
      return routes.default;
    } catch (error) {
      return [];
    }
  },

  async getMenus() {
    try {
      //@ts-ignore
      const routes = await import("ProductMF/Menu");
      return routes.default;
    } catch (error) {
      return [];
    }
  },
};
