import React from "react";
import styled from "styled-components";

const Inspiration = () => {


  return (
    <Container>
      <div className="container">
<h1>INSPIRATION</h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: var(--clr-primary-3);
  .container {
    margin-top: 20px;
    margin-bottom: 20px

    h1 {
      text-align: center;
    }
  }
`;

export default Inspiration;
