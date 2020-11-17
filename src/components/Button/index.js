import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.primary ? "white" : "#9ccc9c")};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #9ccc9c;
  border-radius: 3px;
  curspor: pointer;
`;

const ButtonWrapper = styled.div`
  &:hover ${Button} {
    color: white;
    background: #9ccc9c;
  }
`;

export { Button, ButtonWrapper };
