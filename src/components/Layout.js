import React from "react"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    background: #5CDB95;
  }
`
export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle></GlobalStyle>
    {children}
  </React.Fragment>
)
