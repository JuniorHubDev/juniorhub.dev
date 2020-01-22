import React from "react";
import styled from "styled-components";

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

const StyledHeading = styled.h1`
  color: #fff;
  font-size: 2.25rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;
  @media only screen and (min-width: 768px) {
    text-align: left;
  }
  ${props => (props.dark ? dark : null)}
  ${props => (props.marginTop ? marginTop : null)}
  ${props => (props.uppercase ? uppercase : null)}
  ${props => (props.large ? large : null)}
`;

export const MainHeading = ({ children, ...props }) => {
  return (
    <StyledHeading data-test-id="heading" {...props}>
      {children}
    </StyledHeading>
  );
};
