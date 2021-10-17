import React, { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showRecipesAction, changeRecipesName } from "../store/recipeReducer";
import { searcRecipe } from "../API/recipes";
import RecipesCarusel from "./RecipesCarusel";
import MyButton from "./MyButton";
import MyInput from "./MyInput";

export default function Recipes() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipeReducer.recipes);
  const recipesName = useSelector((state) => state.recipeReducer.recipesName);

  const getRecipes = useCallback((name) => {
    searcRecipe(name).then((data) => {
      console.log(data.hits);
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
            <MyButton
              buttonText="show recipes"
              buttonHandle={getRecipes}
              argument={recipesName}
            />
          </Col>
          <Col lg={8} md={6} sm={6} xs={6}>
            <MyInput
              inputName="Enter word"
              inputHandle={changeRecipes}
              value={recipesName}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {recipes.length > 0 ? (
            <RecipesCarusel />
          ) : (
            <div style={{ textAlign: "center", padding: "50px" }}>
              <h2 style={{ color: "#DAA520", fontWeight: "bold" }}>
                Recipes did not found !
              </h2>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}
