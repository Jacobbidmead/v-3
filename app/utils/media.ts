import { css } from "styled-components";

const sizes = {
  mobile: "500px",
  tablet: "900px",
  desktop: "1024px",
};

export const media = {
  mobile: (styles: any) => css`
    @media (max-width: ${sizes.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: any) => css`
    @media (max-width: ${sizes.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles: any) => css`
    @media (max-width: ${sizes.desktop}) {
      ${styles}
    }
  `,
};
