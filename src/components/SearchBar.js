import React, { useRef } from "react"
import styled from "styled-components"
import SearchButton from "./SearchButton"
import { useSearch } from "../context/context"

const SearchBarWrapper = styled.form`
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

const SearchBar = props => {
  const ref = useRef()
  const state = useSearch()

  const clickHandler = async () => {
    console.log(ref.current.value)
    state.setSearchTerm(ref.current.value)
    const raw = await fetch(
      "https://api.unsplash.com/search/photos?" +
        "client_id=65f622264cdd351d875fb557cdefbee529978cbe2e748d6df31ef0d1636d1971&" +
        "query=" +
        encodeURIComponent(ref.current.value)
    )
    const response = await raw.json()
    console.log(response)
    await state.setPageNumber(response.total_pages)
    await props.getImages(response)
  }

  return (
    <SearchBarWrapper
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <Input ref={ref}></Input>
      <SearchButton clickHandler={clickHandler} />
    </SearchBarWrapper>
  )
}

export default SearchBar
