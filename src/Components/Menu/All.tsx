import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import imgMenu from "../Img/undraw_Hamburger.svg";
import Card from "react-bootstrap/esm/Card";
import { Container } from "react-bootstrap";

interface AllProps {
  all: boolean;
  items: any;
  item: any;
  i: any;
}

export const All: React.FC<AllProps> = ({ all, items }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 16rem)",
      gridAutoRows: "28rem",
      columnGap: "2rem",
      width: "8rem"
    }}
  >
    {all &&
      items.map(
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
          <Container
            key={event.id}
          >
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={imgMenu}></Card.Img>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.desc}</Card.Text>
                <Card.Text>${event.price}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        )
      )}
  </div>
);
