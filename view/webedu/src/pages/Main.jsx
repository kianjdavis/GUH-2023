import React from 'react'
import Menu from '../components/Menu'
import MainPicture from '../components/MainPicture'
import styled from 'styled-components'

const Container = styled.div`
  padding:0;
  margin:0;
  display: flex;
`

const Main = () => {
  return (
    <Container>
      <Menu/>
      <MainPicture/>
    </Container>
  )
}

export default Main
