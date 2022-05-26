export const categoryModule = {
  async getRoutes() {
    try {
      //@ts-ignore
      const routes = await import("CategoryMF/Routes");
      return routes.default;
    } catch (error) {
      return [];
    }
  },

  async getMenus() {
    try {
      //@ts-ignore
      const routes = await import("CategoryMF/Menu");
      return routes.default;
    } catch (error) {
      return [];
    }
  },
};
