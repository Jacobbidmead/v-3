// utils/media.ts
import { css } from "styled-components";

const sizes = {
  mobile: "380px",
  tablet: "768px",
  desktop: "1024px",
};

export const media = {
  mobile: (styles: any) => css`
    @media (min-width: ${sizes.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: any) => css`
    @media (min-width: ${sizes.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles: any) => css`
    @media (min-width: ${sizes.desktop}) {
      ${styles}
    }
  `,
};
