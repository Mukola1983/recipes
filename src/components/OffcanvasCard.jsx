import React from "react";
import { Card, Button, Image, Container, Row } from "react-bootstrap";
import styles from "./OffcanvasCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { offCanvasAction } from "../store/offCanvasReducer";
import Mymappedarray from "./Mymappedarray";

export default function OffcanvasCard() {
  const dispatch = useDispatch();
  const offCanvas = useSelector((state) => state.offCanvasReducer.showModal);
  const modalContent = useSelector(
    (state) => state.offCanvasReducer.modalContent
  );

  const changeModal = () => {
    dispatch(offCanvasAction());
  };

  return (
    <Card
      className={
        offCanvas ? `${styles.card} ` + `${styles.active} ` : `${styles.card} `
      }
    >
      {Object.keys(modalContent).length !== 0 ? (
        <Container className={styles.container}>
          <Image
            src={modalContent.recipe.image}
            style={{ maxWidth: "300px" }}
            fluid
          />
          <Card.Body>
            <Container className={styles.container}>
              <h3>Calories</h3>
              <Row>{modalContent.recipe.calories}</Row>
            </Container>

            <Container className={styles.container}>
              <h3>totalWeight</h3>
              <Row>{modalContent.recipe.totalWeight}</Row>
            </Container>
            <Mymappedarray
              label="dietLabels"
              array={modalContent.recipe.dietLabels}
            />
            <Mymappedarray
              label="dishType"
              array={modalContent.recipe.dishType}
            />
            <Mymappedarray
              label="healthLabels"
              array={modalContent.recipe.healthLabels}
            />
            <Mymappedarray
              label="ingredientLines"
              array={modalContent.recipe.ingredientLines}
            />
            <Mymappedarray
              label="mealType"
              array={modalContent.recipe.mealType}
            />

            <Button
              variant="primary"
              style={{ margin: "30px" }}
              onClick={() => changeModal()}
            >
              Close
            </Button>
          </Card.Body>
        </Container>
      ) : (
        <div>empty</div>
      )}
    </Card>
  );
}
