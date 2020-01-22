import React from "react";
import styled from "styled-components";

const light = `
  color: #fff;
`;

const dark = `
  color: #777
`;

const center = `
  text-align: center;
`;

const marginLarge = `
  margin-bottom: 5rem;
`;

const StyledBodyText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  @media only screen and (min-width: 768px) {
    text-align: left;
  }

  ${props => (props.light ? light : null)}
  ${props => (props.dark ? dark : null)}
  ${props => (props.center ? center : null)}
  ${props => (props.marginLarge ? marginLarge : null)}
`;

export const BodyText = ({ children, ...props }) => {
  return (
    <StyledBodyText data-test-id="styled-body" {...props}>
      {children}
    </StyledBodyText>
  );
};
