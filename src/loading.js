import React from "react";
import { Container, Spinner } from "reactstrap";
const Loading = () => {
  return (
    <Container style={{ height: "300px", margin: "auto" }}>
        <div style={{ width: "34px", margin: "auto", color: '#0063db' }}>
          <Spinner
            style={{ width: "4rem", height: "4rem" }}
            size="lg"
            color="#28df99"
          />
        </div>
        <br />
        <h3 style={{ textAlign: "center" }}>Please Wait...</h3>
    </Container>
  );
};

export default Loading;
