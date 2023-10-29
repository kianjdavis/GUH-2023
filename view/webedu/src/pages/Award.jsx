import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #3469dc;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: 800;
  width: 800px;
  text-align: center;
`;

const Award = () => {
  const [displayText, setDisplayText] = useState("Congraturations! Your final grade is...");

  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
        // 三秒后更新文本内容为 "Grade"
        setDisplayText("Grade!!!");
    
        // 三秒后导航到 '/start'
        const navigationTimer = setTimeout(() => {
          navigate('/');
        }, 3000);
    
        // 返回一个清除计时器的函数以避免内存泄漏
        return () => {
          clearTimeout(timer);
          clearTimeout(navigationTimer);
        };
      }, 3000);
  }, []);

  return (
    <Container>
      <Text>
        {displayText}
      </Text>
    </Container>
  );
}

export default Award;