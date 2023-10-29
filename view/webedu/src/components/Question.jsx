import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { publicRequest } from '../middleware'
import Grade from './Grade';

const Container = styled.div`
  height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3469dc;
`
const QuesInfo = styled.div`
  display: flex;
  padding-left: 50px;
  padding-right: 50px;
  width: 600px;
  height: 200px;
  border-radius: 30px;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  background-color: white;
  margin-bottom: 30px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-size: 30px;
  font-weight: 600;
`
const Choices = styled.div`
  display: flex;
  width: 650px;
  height: 400px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`
const Choice = styled.div`
  display: flex;
  width: 290px;
  height: 150px;
  margin-top: 20px;
  border-style: solid;
  border-radius: 30px;
  border-width: 3px;
  border-color: black;
  background-color: ${(props) => (props.isSelected ? 'red' : 'white')};
  color: black;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.isSelectable ? 'lightblue' : '')};
  }
`
const Text = styled.span`
  color: black;
  font-weight: 600;
`
const Question = () => {

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [question, setQuestion] = useState("waiting")
  const [choice1, setChoice1] = useState("")
  const [choice2, setChoice2] = useState("")
  const [choice3, setChoice3] = useState("")
  const [choice4, setChoice4] = useState("")
  const [questionId, setQuestionId] = useState("")
  const [grade, setGrade] = useState(0)

  const fetchQuestion = async () => {
    const res = await publicRequest.get("/get-question")
      setQuestion(res.data.question)
      setChoice1(res.data.choice1)
      setChoice2(res.data.choice2)
      setChoice3(res.data.choice3)
      setChoice4(res.data.choice4)
      setQuestionId(res.data.id)
    }

  const handleChoose = async (c) => {
    if (selectedChoice) return;  // If a choice has already been selected, don't process the click
    const refresh = () => {
      setSelectedChoice(null)
      fetchQuestion()
    }
    setSelectedChoice(c);
    const jsonData = JSON.stringify({c, questionId});
    try {
      const res = await publicRequest.post("/verify", jsonData, {
        headers: { 'Content-Type': 'application/json'}
      })
      if (res.data) {
        setGrade(grade + 20)
        setQuestion("")
        refresh()
      } else {
        setQuestion("")
        refresh()
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, []);

  return (
    <Container>
      <QuesInfo>{question}</QuesInfo>
      <Choices>
        <Choice onClick={() => handleChoose("1")} isSelected={selectedChoice === "1"} isSelectable={!selectedChoice} style={{marginRight:"10px"}}><Text>A. {choice1}</Text></Choice>
        <Choice onClick={() => handleChoose("2")} isSelected={selectedChoice === "2"} isSelectable={!selectedChoice}><Text>B. {choice2}</Text></Choice>
        <Choice onClick={() => handleChoose("3")} isSelected={selectedChoice === "3"} isSelectable={!selectedChoice} style={{marginRight:"10px"}}><Text>C. {choice3}</Text></Choice>
        <Choice onClick={() => handleChoose("4")} isSelected={selectedChoice === "4"} isSelectable={!selectedChoice}><Text>D. {choice4}</Text></Choice>
      </Choices>
      <Grade grade={grade}></Grade>
    </Container>
  )
}

export default Question