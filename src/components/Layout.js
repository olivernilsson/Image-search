import React from "react"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    background: #5CDB95;
    padding-left: calc(100vw - 100%);
  }
`
export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle></GlobalStyle>
    {children}
  </React.Fragment>
)
