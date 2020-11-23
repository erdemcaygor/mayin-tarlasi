import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import CellContainer from "./CellContainer";
import ActionMenu from "./ActionMenu";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background: ${(props) => props.theme.mainBackground};
  height: 100%;
`;

const Content = styled.div`
  grid-column: ${(props) => props.span};
`;

const Home = (props) => {
  return (
    <MainContainer>
      <Content span="span 2" />
      <Content span="span 8">
        <Container flexDirection="column">
          <ActionMenu></ActionMenu>
          <Container justifyContent="center" padding="2em">
            <CellContainer></CellContainer>
          </Container>
        </Container>
      </Content>
      <Content span="span 2" />
    </MainContainer>
  );
};

export default Home;
