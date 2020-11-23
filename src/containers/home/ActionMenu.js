import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Button,
  ButtonWrapper,
  ThemeToggle,
} from "../../components";
import { playAgain } from "../../redux/actions/gameActions";
import { changeTheme } from "../../redux/actions/globalActions";

const ScoreContainer = styled.div`
  padding: 5px;
  border: ${({ theme }) => theme.scoreContainerBorder};
  & span {
    color: ${({ theme }) => theme.textColor};
  }
`;

const ActionMenu = (props) => {
  const gameReducer = useSelector((state) => state.gameReducer);
  const globalReducer = useSelector((state) => state.globalReducer);
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
        <ThemeToggle
          toggleTheme={(theme) => {
            dispatch(changeTheme());
          }}
          themeType={globalReducer?.theme}></ThemeToggle>
        <ScoreContainer>
          <span>Score: {gameReducer?.point || 0}</span>
        </ScoreContainer>
      </Container>
    </Container>
  );
};

export default ActionMenu;
