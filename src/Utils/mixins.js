import { variables } from "./variables";

export const mixins = {
  gradientBackground() {
    return "background-image: linear-gradient(to left, #6d71eb, #454aec)";
  },

  largeScreen(content) {
    return ` 
      @media (min-width: ${variables.tabletWidth}) {
        ${content}
      }`;
  }
};
