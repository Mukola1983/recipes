import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function MyInput({ inputName, value, inputHandle }) {
  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">{inputName}</InputGroup.Text>
      <FormControl
        value={value}
        onChange={(e) => inputHandle(e)}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
  );
}
