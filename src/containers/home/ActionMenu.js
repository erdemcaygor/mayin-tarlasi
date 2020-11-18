import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Container, Button, ButtonWrapper } from "../../components";
import { playAgain } from "../../redux/actions/gameActions";

const ScoreContainer = styled.div`
  padding: 5px;
  border: solid 2px black;
`;

const ActionMenu = (props) => {
  const gameReducer = useSelector((state) => state.gameReducer);
  const dispatch = useDispatch();
  return (
    <Container
      justifyContent="space-between"
      grow={1}
      padding="2em 2em"
      borderBottom="solid 1px black">
      <Container alignItems="center">
        {gameReducer?.gameFinished && (
          <ButtonWrapper>
            <Button onClick={() => dispatch(playAgain())}>Yeniden Başla</Button>
          </ButtonWrapper>
        )}
      </Container>
      <Container alignItems="center">
        <ScoreContainer>Score: {gameReducer?.point || 0}</ScoreContainer>
      </Container>
    </Container>
  );
};

export default ActionMenu;
