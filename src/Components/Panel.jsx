import React from "react";
import styled from "styled-components";
import { variables } from "../Utils/variables";
import { mixins } from "../Utils/mixins";

const gradient = `
  ${mixins.gradientBackground()}
`;

const StyledPanel = styled.section`
  padding: ${variables.panelPadding} 0;

  ${props => (props.gradient ? gradient : null)}
`;

export const Panel = ({ children, ...props }) => {
  return (
    <StyledPanel data-test-id="panel" {...props}>
      {children}
    </StyledPanel>
  );
};
