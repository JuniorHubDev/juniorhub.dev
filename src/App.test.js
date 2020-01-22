import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// To test for the heading component.
// So first check the component renders - if component isinthedom - look for the data-test-id.
// Next, test all the props do what I expect.
// Mount the component, check the styles, when dark is applied, does it have black in the styles.
