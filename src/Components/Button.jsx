import React from "react";
import styled from "styled-components";
import { variables } from "../Utils/variables";

const dark = `
  color: black;
`;
const marginTop = `
  margin-top: 2rem;
`;
const uppercase = `
  text-transform: uppercase;
  margin-bottom: .875rem;
`;

const large = `
  font-size: 2.5rem;
  margin-bottom: 0.875rem;
  @media only screen and (min-width: 768px) {
    font-size: 3.75rem;
  }`;

const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 20px;
  background-color: ${variables.accentColour};
  border: none;
  color: ${variables.buttonTextColor};
  font-family: ${variables.buttonFontFamily};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  text-rendering: optimizeLegibility;
  display: inline-block;
  ${props => (props.dark ? dark : null)}
  ${props => (props.marginTop ? marginTop : null)}
  ${props => (props.uppercase ? uppercase : null)}
  ${props => (props.large ? large : null)}
`;

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton data-test-id="heading" {...props}>
      {children}
    </StyledButton>
  );
};
