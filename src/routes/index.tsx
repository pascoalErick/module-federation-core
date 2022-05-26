import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";

import { categoryModule } from "../modules/categoryModule";
import { productModule } from "../modules/productModule";

type RouteMF = {
  path: string;
  component: React.ReactElement;
};

export function Router() {
  const [routes, setRoutes] = React.useState<RouteMF[]>([]);

  const loadRoutes = React.useCallback(async () => {
    const productRoutes = await productModule.getRoutes();
    const categoryRoutes = await categoryModule.getRoutes();

    const allRoutes = [
      ...productRoutes.filter((route: RouteMF) =>
        route.path.startsWith("/product")
      ),

      ...categoryRoutes.filter((route: RouteMF) =>
        route.path.startsWith("/category")
      ),
    ];

    setRoutes(allRoutes);
  }, []);

  React.useEffect(() => {
    loadRoutes();
  }, [loadRoutes]);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            {routes?.map((route: RouteMF) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
