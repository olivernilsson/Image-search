import React from "react"
import styled from "styled-components"

const Image = props => {
  const Image = styled.img`
    background-image: url(${props.image.urls.small});
    width: 250px;
    height: 250px;
    margin 30px;
    display: inline-block
  `
  return <Image></Image>
}

export default Image
