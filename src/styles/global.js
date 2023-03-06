import { createGlobalStyle } from "styled-components";
import "@fontsource/inter"

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body {
  font-family: "Inter", Arial, Helvetica, sans-serif;
  height: 100%;
}

ul, li, div {
  list-style: none;
}
`
