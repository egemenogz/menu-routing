import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import imgMenu from "../Img/undraw_refreshing.svg";
import { Container, Card } from "react-bootstrap";

interface ShakesProps {
  shakes: boolean;
  items: any;
}

export const Shakes: React.FC<ShakesProps> = ({ shakes, items }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 16rem)",
      gridAutoRows: "28rem",
      columnGap: "2rem",
      width: "8rem",
    }}
  >
    {shakes &&
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
          <Container key={event.id}>
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
