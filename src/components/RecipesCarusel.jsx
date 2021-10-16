import React from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "./MyCard";

export default function RecipesCarusel() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipeReducer.recipes);

  return (
    <Carousel>
      {recipes.map((item) => (
        <Carousel.Item
          style={{
            textAlign: "center",
          }}
          key={item.recipe.image}
        >
          <MyCard
            imgSrc={item.recipe.image}
            label={item.recipe.label}
            ingredients={item.recipe.ingredients}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
