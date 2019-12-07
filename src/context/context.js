import { createContext, useContext, useState } from "react"

export const useContextValues = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [pageNumber, setPageNumber] = useState()

  return {
    searchTerm,
    setSearchTerm,
    pageNumber,
    setPageNumber,
  }
}

export const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext)
