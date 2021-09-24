
import {css} from '@emotion/react';

const globalStyle = css`

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }
  /* Typography
 * *********************************** */
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
  }
  body {
    font-family: 'Koh Santepheap', cursive;
    font-size: 1.6rem;
    line-height: 1.4;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    background: #F3F6FE;
    // color: #495057;
  }
  * {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  a,
  a:visited {
    // color: inherit;
  }
  /* Layout
 * *********************************** */
  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }
  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: inherit;
  }
  /* Elements
 * *********************************** */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ul {
    list-style: none;
  }
  img,
  video {
    max-width: 100%;
  }
  img {
    border-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }
  /* Attributes & states
 * *********************************** */
  [hidden] {
    display: none !important;
  }
  [disabled] {
    cursor: not-allowed;
  }
  :focus:not(:focus-visible) {
    outline: none;
  }
  /* Utility classes
 * *********************************** */
  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    left: -9999px;
    top: -9999px;
  }
`;

export default globalStyle;