import React from "react";
import styled from "styled-components";
import { mixins } from "../Utils/mixins";

const StyledNavBarWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  ${mixins.gradientBackground()}
`;

export const NavBarWrapper = ({ children }) => {
  return (
    <StyledNavBarWrapper data-test-id="nav-bar-wrapper">
      {children}
    </StyledNavBarWrapper>
  );
};
