import React from "react";
import { Card, Button, Image, Container } from "react-bootstrap";

export default function MyCard({ imgSrc, label, ingredients }) {
  return (
    <Card
      style={{
        alignItems: "center",
        backgroundColor: "#778899",
      }}
    >
      <Image src={imgSrc} style={{}} fluid />
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <Container>
          <h3>Ingridients</h3>
          {ingredients.map((ingredient) => (
            <div key={ingredients.indexOf(ingredient)}>{ingredient.text}</div>
          ))}
        </Container>

        <Button variant="primary" style={{ margin: "30px" }}>
          Go to
        </Button>
      </Card.Body>
    </Card>
  );
}
