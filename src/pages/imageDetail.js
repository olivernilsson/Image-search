import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import ImageFull from "../components/ImageFull"

const Container = styled.div`
  margin: 2rem auto;
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

const imageDetail = ({ location }) => {
  let desc =
    location.state.image.alt_description.charAt(0).toUpperCase() +
    location.state.image.alt_description.slice(1)
  return (
    <Layout>
      <Container>
        <Heading>{location.state.image.description}</Heading>
        <ImageFull image={location.state.image} />
        <UnderText>{desc}</UnderText>
      </Container>
    </Layout>
  )
}

export default imageDetail
