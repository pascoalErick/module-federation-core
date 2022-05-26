import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import { NavLink } from "./NavLink";

type MenuBase = {
  label: string;
  path: string;
  auth: string;
};

type Menu = MenuBase & {
  submenus: MenuBase[];
};

import { ActiveLink } from "./ActiveLink";
import { useLocation } from "react-router-dom";

//@ts-ignore
import productMFMenus from "ProductMF/Menu";
import { productModule } from "../../modules/productModule";
import { categoryModule } from "../../modules/categoryModule";
import React from "react";

//@ts-ignore
// import categoryMFMenus from "CategoryMF/Menu";

export function SidebarNav() {
  const location = useLocation();

  const [menus, setMenus] = React.useState<Menu[]>([]);

  const loadMenus = React.useCallback(async () => {
    const productMenus = await productModule.getMenus();
    const categoryMenus = await categoryModule.getMenus();

    const allMenus = [...productMenus, ...categoryMenus];

    setMenus(allMenus);
  }, []);

  React.useEffect(() => {
    loadMenus();
  }, [loadMenus]);

  return (
    <Accordion allowToggle mt={4}>
      {menus?.map((menu: Menu, index: number) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <ActiveLink
                isActive={
                  location.pathname.startsWith(menu.path) ||
                  !!menu.submenus.find((submenu) =>
                    location.pathname.startsWith(submenu.path)
                  )
                }
              >
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {menu.label}
                </Box>
              </ActiveLink>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>
            {menu.submenus?.map((submenu, indexSubmenu) => (
              <NavLink key={indexSubmenu} to={submenu.path} pb={2}>
                {submenu.label}
              </NavLink>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
