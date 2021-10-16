import React, { useCallback } from "react";
import {
  ButtonGroup,
  Button,
  Container,
  Row,
  InputGroup,
  FormControl,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showRecipesAction, changeRecipesName } from "../store/recipeReducer";
import { searcRecipe } from "../API/recipes";
import RecipesCarusel from "./RecipesCarusel";

export default function Recipes() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipeReducer.recipes);
  const recipesName = useSelector((state) => state.recipeReducer.recipesName);

  const getRecipes = useCallback((name) => {
    searcRecipe(name).then((data) => {
      dispatch(showRecipesAction(data.hits));
      dispatch(changeRecipesName(""));
    });
  }, []);

  const changeRecipes = useCallback((e) => {
    e.preventDefault();
    dispatch(changeRecipesName(e.target.value));
  }, []);

  return (
    <div>
      <Container style={{ margin: "20px" }}>
        <Row style={{}}>
          <Col>
            <ButtonGroup>
              <Button onClick={() => getRecipes(recipesName)}>
                show recipes
              </Button>
            </ButtonGroup>
          </Col>
          <Col lg={8} md={6} sm={6} xs={6}>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
              <FormControl
                value={recipesName}
                onChange={(e) => changeRecipes(e)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>{recipes.length > 0 ? <RecipesCarusel /> : <div>empty</div>}</Row>
      </Container>
    </div>
  );
}
