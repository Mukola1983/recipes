import React, { useCallback } from "react";
import { Card, Button, Image, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { offCanvasAction, setModalAction } from "../store/offCanvasReducer";

export default function MyCard({ recipe }) {
  const dispatch = useDispatch();
  const modalContent = useSelector(
    (state) => state.offCanvasReducer.modalContent
  );

  const changeModal = () => {
    dispatch(offCanvasAction());
    dispatch(setModalAction(recipe));
  };

  return (
    <Card
      style={{
        alignItems: "center",
        backgroundColor: "#778899",
        padding: "20px",
      }}
    >
      <Image src={recipe.recipe.image} style={{}} fluid />
      <Card.Body>
        <Card.Title>{recipe.recipe.label}</Card.Title>
        <Container>
          <h3>Ingridients</h3>
          {recipe.recipe.ingredients.map((ingredient) => (
            <div key={recipe.recipe.ingredients.indexOf(ingredient)}>
              {ingredient.text}
            </div>
          ))}
        </Container>

        <Button
          variant="primary"
          style={{ margin: "30px" }}
          onClick={() => changeModal(recipe)}
        >
          Go to
        </Button>
      </Card.Body>
    </Card>
  );
}
