import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Container, Button, ButtonWrapper } from "../../components";

const ScoreContainer = styled.div`
  padding: 5px;
  border: solid 2px black;
`;

const ActionMenu = (props) => {
  const gameReducer = useSelector((state) => state.gameReducer);
  return (
    <Container
      justifyContent="space-between"
      grow={1}
      padding="2em 2em"
      borderBottom="solid 1px black">
      <Container alignItems="center">
        <ButtonWrapper>
          <Button onClick={() => console.log("dffds")}>Başla</Button>
        </ButtonWrapper>
      </Container>
      <Container alignItems="center">
        <ScoreContainer>Score: {gameReducer?.point || 0}</ScoreContainer>
      </Container>
    </Container>
  );
};

export default ActionMenu;
