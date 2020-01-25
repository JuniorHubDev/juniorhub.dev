import React from "react";
import "./App.css";
// import { MainHeading } from "./Components/MainHeading";
// import { BodyText } from "./Components/BodyText";
// import { Button } from "./Components/Button";
import { NavBarWrapper } from "./Components/NavBarWrapper";
import { Container } from "./Components/Container";
import { NavBar } from "./Components/NavBar";
import { Panel } from "./Components/Panel";

export const App = () => {
  return (
    <div className="App">
      <NavBarWrapper>
        <Container>
          <NavBar></NavBar>
        </Container>
      </NavBarWrapper>
      <Panel gradient></Panel>
    </div>
  );
};
