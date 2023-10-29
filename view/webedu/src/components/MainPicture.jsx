import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 70vw;
    height: 100vh;
    display: flex;
    background-color: #3469dc;
    justify-content: center;
    align-items: center;
`
const Text = styled.h1`
  color: white;
  font-size: 150px;
  font-weight: 800;
  width: 800px;
  text-align: right;
  margin-left: 100px;
`
const MainPicture = () => {
  return (
    <Container>
        <Text>For Education</Text>
    </Container>
  )
}

export default MainPicture
