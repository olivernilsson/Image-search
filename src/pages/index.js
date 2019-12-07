import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SearchBar from "../components/SearchBar"
import Image from "../components/Image"
import Pagination from "../components/Pagination"
import { SearchContext } from "../context/context"
import { useContextValues } from "../context/context"

const Container = styled.div`
  margin: 6rem auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Catamaran", sans-serif;
  text-align: center;
`
const Heading = styled.h1`
  font-size: 5rem;
  font-family: "Catamaran", sans-serif;
  font-weight: bold;
  color: #edf5e1;
  margin-bottom: 20px;
`
const UnderText = styled.h2`
  font-size: 1.5rem;
  font-family: "Catamaran", sans-serif;
  font-weight: bold;
  color: #edf5e1;
  margin-top: 0;
  margin-bottom: 20px;
`
const ImageWrapper = styled.div`
  width 100%;
`

const App = () => {
  const [images, setImages] = useState({ fetched: false, image: {} })

  const getImages = async image => {
    await setImages({ fetched: true, image: image.results })
  }

  return (
    <SearchContext.Provider value={useContextValues()}>
      <Layout>
        <Container>
          <Heading>IMAGE SEARCH</Heading>
          <UnderText>TYPE SOMETHING IN</UnderText>
          <SearchBar getImages={getImages} />
          <ImageWrapper>
            {images.fetched
              ? images.image.map(image => (
                  <Image image={image} key={image.id} />
                ))
              : null}
            {images.fetched && images.image.length === 0 ? (
              <UnderText>No images found</UnderText>
            ) : (
              ""
            )}
            <Pagination getImages={getImages} />
          </ImageWrapper>
        </Container>
      </Layout>
    </SearchContext.Provider>
  )
}

export default App
