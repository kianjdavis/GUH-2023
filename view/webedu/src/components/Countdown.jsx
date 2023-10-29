import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  right: 90px;
  top: 100px;
  font-size: 20px;
  font-weight: 800;
  color: white;
`

const Countdown = (props) => {
  const [seconds, setSeconds] = useState(60);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/award');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
        handleNavigate()
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return <Container>Countdown: {seconds} seconds</Container>;
};

export default Countdown;