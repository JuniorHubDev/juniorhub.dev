import React from "react";
import styled from "styled-components";
import { variables } from "../Utils/variables";

const textCenter = `
  text-align: center;
`;

const StyledContainer = styled.div`
  max-width: ${variables.containerWidth};
  padding: 0 ${variables.gutterWidth};
  margin: 0 auto;
  position: relative;

  ${props => (props.textCenter ? textCenter : null)}
`;

export const Container = ({ children, ...props }) => {
  return (
    <StyledContainer data-test-id="container" {...props}>
      {children}
    </StyledContainer>
  );
};
