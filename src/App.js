import React from "react";
import "./App.css";
import { MainHeading } from "./Components/MainHeading";
import { BodyText } from "./Components/BodyText";
import { Button } from "./Components/Button";

export const App = () => {
  return (
    <div className="App">
      <MainHeading dark marginTop large uppercase>
        This is a main heading
      </MainHeading>
      <BodyText>This is body text</BodyText>
      <Button>Join our Slack</Button>
    </div>
  );
};
