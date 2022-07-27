import {RocketLaunch} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: #D1D7E0;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: colum;
`
const Title = styled.h1`
    font-size: 55px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background color: #D1D7E0;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`;
const Input = styled.input`
    border: none;
    flex: 8;
`;
const Button = styled.button`
    flex: 1;
    background-color: #564F6F;
    color: #D1D7E0;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get updates on the latest bits and bops!</Desc>
        <InputContainer>
            <Input placeholder= "Your email here!"/>
                <Button>
                    <RocketLaunch/>
                </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter