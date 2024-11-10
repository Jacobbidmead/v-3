import { css } from "styled-components";

const sizes = {
  mobile: "280px",
  mobileLarge: "470px",
  tablet: "668px",
  desktop: "824px",
  widescreen: "1700px",
};

export const media = {
  mobile: (styles: any) => css`
    @media (min-width: ${sizes.mobile}) and (max-width: ${sizes.mobileLarge}) {
      ${styles}
    }
  `,
  mobileLarge: (styles: any) => css`
    @media (min-width: ${sizes.mobileLarge}) and (max-width: ${sizes.tablet}) {
      ${styles}
    }
  `,
  tablet: (styles: any) => css`
    @media (min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop}) {
      ${styles}
    }
  `,
  desktop: (styles: any) => css`
    @media (min-width: ${sizes.desktop}) and (max-width: ${sizes.widescreen}) {
      ${styles}
    }
  `,
  widescreen: (styles: any) => css`
    @media (min-width: ${sizes.widescreen}) {
      ${styles}
    }
  `,
};
