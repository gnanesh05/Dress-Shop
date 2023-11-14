import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DirectoryItemContainer, Body, BackgroundImage } from './directoryItem.styles'


const DirectoryItem = ({category}) => {
const {title, imageUrl, route} = category;
const navigate = useNavigate();

const navigationHandler = ()=>navigate(route);
  return (
    <DirectoryItemContainer onClick={navigationHandler}>
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