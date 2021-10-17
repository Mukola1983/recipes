import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export default function MyButton({ buttonText, buttonHandle, argument }) {
  return (
    <ButtonGroup>
      <Button onClick={() => buttonHandle(argument)}>{buttonText}</Button>
    </ButtonGroup>
  );
}
