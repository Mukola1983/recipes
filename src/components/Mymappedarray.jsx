import React from "react";
import { Container } from "react-bootstrap";

export default function Mymappedarray({ array, label }) {
  return (
    <Container style={{ textAlign: "center" }}>
      <h3>{label}</h3>
      {array.map((item) => (
        <div key={array.indexOf(item)}>{item}</div>
      ))}
    </Container>
  );
}
