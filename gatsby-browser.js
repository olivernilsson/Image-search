import React from "react"

import { SearchContext } from "./src/context/context"
import { useContextValues } from "./src/context/context"

export const wrapRootElement = ({ element }) => (
  <SearchContext.Provider value={useContextValues()}>
    {element}
  </SearchContext.Provider>
)
