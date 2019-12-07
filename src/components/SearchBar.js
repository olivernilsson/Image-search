import React from "react"
import styled from "styled-components"
import SearchButton from "./SearchButton"

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
`
const Input = styled.input`
  max-width: 600px;
  width: 100%;
  height: 40px;
  line-height: 80px;
  font-size: 2rem;
  margin: 0 auto 12px auto;
  border 2px solid #05386B;
  background: #edf5e1;
  align-content: stretch;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem
`

const SearchBar = () => (
  <SearchBarWrapper>
    <Input></Input>
    <SearchButton />
  </SearchBarWrapper>
)

export default SearchBar
