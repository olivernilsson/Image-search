import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

import SearchBar from "../components/SearchBar"

const Container = styled.div`
  margin: 6rem auto;
  max-width: 650px;
  display: flex;
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
export default () => (
  <Layout>
    <Container>
      <Heading>IMAGE SEARCH</Heading>
      <UnderText>TYPE SOMETHING IN</UnderText>
      <SearchBar />
    </Container>
  </Layout>
)
