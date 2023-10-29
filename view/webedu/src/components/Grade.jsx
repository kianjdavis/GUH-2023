import React  from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  right: 90px;
  top: 150px;
  font-size: 20px;
  font-weight: 800;
  color: white;
`
const Grade = ({ grade }) => {

    // useEffect(() => {
    //     // refreshCounter 变化时触发重新渲染
    //     // 你可以在这里执行任何与渲染相关的逻辑
    //   }, [grade]);
    return (
        <Container>Grade: {grade}</Container>
    )
}

export default Grade
