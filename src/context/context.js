import { createContext, useContext, useState } from "react"

export const useContextValues = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [pageNumber, setPageNumber] = useState()
  const [totalPageNumber, setTotalPageNumber] = useState()

  return {
    searchTerm,
    setSearchTerm,
    pageNumber,
    setPageNumber,
    totalPageNumber,
    setTotalPageNumber,
  }
}

export const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext)
