import React from "react";
import styled from "styled-components";
import { mixins } from "../Utils/mixins";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 1rem;
  ${mixins.largeScreen("justify-content: space-between")};
`;

export const NavBar = () => {
  return (
    <StyledNavBar data-test-id="nav-bar">
      <a href="/">
        <img
          src="/Images/JHTransparentWhiteLogo.png"
          width="300px"
          alt="Logo"
        />
      </a>
    </StyledNavBar>
  );
};
