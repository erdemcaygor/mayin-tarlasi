import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as MoonIcon } from "../../icons/moon.svg";
import { ReactComponent as SunnyIcon } from "../../icons/sunny.svg";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.mainBackground};
  border: ${({ theme }) => theme.themeSwitchBorder};
  border-radius: 10px;
  padding: 10px;
  width: 5rem;
  height: 2.3rem;
  display: flex;
  margin: 0 1rem;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  & svg {
    width: 1rem;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ themeType }) =>
        themeType === "dark" ? "translateY(0)" : "translateY(100px)"};
      width: ${({ themeType }) => (themeType === "dark" ? "1.5rem" : "0")};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ themeType }) =>
        themeType === "dark" ? "translateY(-100px)" : "translateY(0)"};
      width: ${({ themeType }) => (themeType === "dark" ? "0" : "1.5rem")};
    }
  }
`;

const ThemeToggle = (props) => {
  const { toggleTheme, themeType } = props;
  return (
    <ToggleContainer onClick={toggleTheme} themeType={themeType}>
      <MoonIcon />
      <SunnyIcon />
    </ToggleContainer>
  );
};

ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.string,
};

ThemeToggle.defaultProps = {
  toggleTheme: () => {},
};

export { ThemeToggle };
