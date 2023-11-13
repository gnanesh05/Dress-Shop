import React from 'react'
import { DirectoryItemContainer, Body, BackgroundImage } from './directoryItem.styles'


const DirectoryItem = ({category}) => {
const {title, imageUrl} = category 
  return (
    <DirectoryItemContainer>
        <BackgroundImage
        style={{backgroundImage : `url(${imageUrl})`}}
        /> 
        <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
        </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem