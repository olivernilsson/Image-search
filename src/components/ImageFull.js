import React from "react"
import styled from "styled-components"

const ImageFull = props => {
  const Image = styled.img`
    background-image: url(${props.image.urls.full});
    width: 800px;
    height: 600px;
    margin 30px;
    display: inline-block;
    background-size: cover;

  `
  return <Image>{console.log(props.image)}</Image>
}

export default ImageFull
