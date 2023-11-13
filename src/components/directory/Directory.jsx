import React from 'react'
import DirectoryItem from '../directory-item/directoryItem'
import { DirectoryContainer } from './Directory.styles'

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
      {
        categories.map((category)=>(
          <DirectoryItem  category={category}/>
        ))
      }
     
    </DirectoryContainer>
  )
}

export default Directory