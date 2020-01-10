import React from "react"
import styled from "styled-components"

const Image = props => {
  const Image = styled.img`
    background-image: url(${props.image.urls.small});
    width: 250px;
    height: 250px;
    margin: 30px;
    display: inline-block;
    background-size: cover;
    transition: 200ms ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      }
  `
  return <Image></Image>
}

export default Image
