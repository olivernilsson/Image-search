import React from "react"
import styled from "styled-components"

const Button = styled.button`
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  height: 46px;
  width: 100px;
  border: none;
  margin: 0 auto 12px auto;
  background: #05386b;
  color: #edf5e1;
  font-weight: bold;
  font-family: "Catamaran", sans-serif;
  letter-spacing: 1px;
`

const SearchButton = props => <Button>SEARCH</Button>

export default SearchButton
