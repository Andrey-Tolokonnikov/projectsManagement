import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { NavLink } from "react-router-dom"
import { NavigationItem } from "../model/NavigationItem"

type Props = {
  items: NavigationItem[]
}

const Navigation = (props: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        {props.items.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "bg-slate-100 rounded-sm p-2 border-slate-400 border"
                  : "p-2 border border-white"
              }
            >
              {item.title}
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
