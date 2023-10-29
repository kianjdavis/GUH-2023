import React, { useState } from 'react';
import styled from 'styled-components';
import Question from '../components/Question';
import Countdown from '../components/Countdown';
import { ReactComponent as MenuIcon } from '../img/menu-button-fill.svg';
import { ReactComponent as CloseIcon } from '../img/x-lg.svg';
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3469dc;
  position: relative;
`;

const MenuContainer = styled.div`
    display: flex; 
    flex-direction: column ;
  height: 100vh;
  width: 20vw;
  background-color: white;
  position: absolute;
  top: 0;
  left: ${props => (props.showMenu ? '0' : '-20vw')};
  transition: left 0.3s;
  z-index: 2;
`;
const MenuItem = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: gray;

  &:hover {
    transition: font-size 0.1s, font-weight 0.1s, color 0.1s;
    font-size: 80px;
    font-weight: 1000;
    color: #3469dc;
  }
`
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 230px;
  padding-left: 80px;
`
const Game = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  const menuitem = {
    "Quit":"",
    "Win":"win",
    "Lose":"lose",
  }

  return (
    <Container>
      <MenuIcon
        onClick={handleMenu}
        style={{
          fill: 'white',
          width: '40px',
          height: '40px',
          backgroundColor: '#3469dc',
          marginTop: '10px',
          marginRight: '1480px',
          alignSelf: 'left',
          cursor: 'pointer',
        }}
      />

      <MenuContainer showMenu={showMenu}>
        <CloseIcon
          onClick={handleMenu}
          style={{
            fill: 'black',
            width: '30px',
            height: '30px',
            margin: '10px',
            cursor: 'pointer',
          }}/>
          <Panel>
            {Object.entries(menuitem).map(([key, value]) => (
            <Link to={`/${value}`} style={{textDecoration: 'none', color: 'black', padding: 0, margin: 0}}>
                <MenuItem key={key}>{key}</MenuItem>
            </Link>
            ))}
            </Panel>
      </MenuContainer>
      <Question/>
      <Countdown/>
    </Container>
  );
};

export default Game;
