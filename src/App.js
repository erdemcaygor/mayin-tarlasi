import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import Home from "./containers/home";
import themes from "./themes";

function App() {
  const globalVars = useSelector((state) => state.globalReducer);
  return (
    <>
      <ThemeProvider theme={themes[globalVars?.theme]}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
