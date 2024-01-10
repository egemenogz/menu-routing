import { Container } from "react-bootstrap";
import { All } from "./Menu/All";
import { Breakfast } from "./Menu/Breakfast";
import { Lunch } from "./Menu/Lunch";
import { Shakes } from "./Menu/Shakes";
import menuData from "./MenuData";

interface MenuItemsProps {
  items: any;
  all: any;
  breakfast: any;
  lunch: any;
  shakes: any;
}

export const MenuItems:React.FC<MenuItemsProps> = ({ items, all, breakfast, lunch, shakes }) => {
    return <Container className="MenuItems container" style={{marginTop:"2rem"}}
    >
        <All all={all} items={items} item={menuData} i={menuData} />
        <Breakfast breakfast={breakfast} items={items} item={menuData} i={menuData} />
        <Lunch lunch={lunch} items={items} item={menuData} i={menuData} />
        <Shakes shakes={shakes} items={items} item={menuData} i={menuData} />
    </Container>;
};
