import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex: ${(props) => props.grow};
  padding: ${(props) => props.padding};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
`;

Container.propTypes = {
  flexDirection: PropTypes.string,
};

Container.defaultProps = {
  flexDirection: "row",
};

export { Container };
