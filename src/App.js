import React from "react";
import GlobalStyle from "./globalStyles";
import Content from "./components/Content.js/Content";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Content />
    </BrowserRouter>
  );
};

export default App;
