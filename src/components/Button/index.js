import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.primary ? "white" : "#5cb85c")};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5cb85c;
  border-radius: 3px;
  curspor: pointer;
`;

const ButtonWrapper = styled.div`
  &:hover ${Button} {
    color: white;
    background: #5cb85c;
  }
`;

export { Button, ButtonWrapper };
