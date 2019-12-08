import React, { useEffect } from "react"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "react-feather"
import { useSearch } from "../context/context"

const PaginationWrapper = styled.div`
  height 30px;
  line-height: 30px;
  vertical-align: baseline;
  font-size: 2rem;
`

const Pagination = props => {
  const state = useSearch()

  const clickHandler = async page => {
    if (page === "minus" && state.pageNumber > 1) {
      await state.setPageNumber(state.pageNumber - 1)
    } else if (page === "plus" && state.pageNumber < state.totalPageNumber) {
      await state.setPageNumber(state.pageNumber + 1)
    }
  }

  useEffect(() => {
    const run = async () => {
      const raw = await fetch(
        `https://api.unsplash.com/search/photos?page=${state.pageNumber};` +
          "client_id=65f622264cdd351d875fb557cdefbee529978cbe2e748d6df31ef0d1636d1971&" +
          "query=" +
          encodeURIComponent(state.searchTerm)
      )
      const response = await raw.json()
      state.setTotalPageNumber(response.total_pages)
      await props.getImages(response)
    }
    run()
  }, [state.pageNumber])

  return (
    <PaginationWrapper>
      <ChevronLeft onClick={() => clickHandler("minus")} />{" "}
      {state.pageNumber + "/" + state.totalPageNumber}
      <ChevronRight onClick={() => clickHandler("plus")} />
    </PaginationWrapper>
  )
}

export default Pagination
