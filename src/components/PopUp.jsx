import styled from "styled-components";

const Container = styled.div`
    height: 25px;
    background-color: #802BB1;
    font-size: 15px
    color: white
    display: flex;
    align-items: center;
    justify-content:center;
    
`

const PopUp = () => {
  return (
    <Container>
        Keep an eye out for sales!! Our Fightsicks are selling like... well... Fightsticks!!
    </Container>
  )
}

export default PopUp