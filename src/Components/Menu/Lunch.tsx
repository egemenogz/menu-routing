import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import imgMenu from "../Img/undraw_barbecue.svg";
import {Card } from "react-bootstrap";

interface LunchProps {
  lunch: boolean;
  items: any;
  item: any;
  i: any;
}

export const Lunch: React.FC<LunchProps> = ({ lunch, items }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 16rem)",
      gridAutoRows: "28rem",
      columnGap: "2rem",
      width: "8rem",
      gap: "2rem",
    }}
  >
    {lunch &&
      items.filter((item: {category: string})=> item.category ==="lunch").map(
        (event: {
          price: ReactNode;
          id: Key | null | undefined;
          title:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          desc:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => (
          <Card key={event.id}>
            <Card.Img variant="top" src={imgMenu}></Card.Img>
            <Card.Body
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                lineHeight: "1.5",
                position:"relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Card.Title style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                {event.title}
              </Card.Title>
              <Card.Text style={{ fontSize: "1rem", fontWeight: "400" }}>
                {event.desc}
              </Card.Text>
              <Card.Text style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                ${event.price}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      )}
  </div>
);
