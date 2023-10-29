import React, {useState} from 'react'
import styled from 'styled-components'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { publicRequest } from '../middleware'

const Container = styled.div`
  width: 30vw;
  height: 100vh;
  display: flex;
  align-items: center;
`
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
`
const MainMenuItem = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: gray;
  
  &:hover {
    transition: font-size 0.1s, font-weight 0.1s, color 0.1s fade-Out;
    font-size: 80px;
    font-weight: 1000;
    color: #3469dc;
  }
`
const MenuItem = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: gray;

  &:hover {
    transition: font-size 0.5s, font-weight 0.5s, color 0.5s;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transform: transitionX(300px);
    font-size: 80px;
    font-weight: 1000;
    color: #3469dc;
  }
`

const Menu = () => {

  const start = "Start"
  const menuitem = {
    "options":"options",
    "Award":"award",
    "Help":"help",
  }
  
  return (
    <Container>
      <Panel>
        <Link to={`/start`} style={{textDecoration: 'none', color: 'black', padding: 0, margin: 0}}>
          <MainMenuItem >{start}</MainMenuItem>
        </Link>
        
        {Object.entries(menuitem).map(([key, value]) => (
          <Link to={`/${value}`} style={{textDecoration: 'none', color: 'black', padding: 0, margin: 0}}>
            <MenuItem key={key}>{key}</MenuItem>
          </Link>
        ))}
      </Panel>
      
    </Container>
  )
}

export default Menu
