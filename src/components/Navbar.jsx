import React from "react";
import styled from "style-components";
import {RocketLaunch} from "@material-ui/icons";

const Container= styled.div`
    height: 60px;
    background-color: #564F6F;
  
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//_________________________________________
const Left = styled.div`
  flex:1
`;
const Logo = styled.span`
  font-size: 32px;
  cursor: pointer;
`
//_________________________________________
const Center = styled.div`
  flex:1
`;

//_________________________________________
const Right = styled.div`
  flex:1
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuBar = styled.div`
font-size: 14px;
cursor: pointer;
`

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding:5px;
`
const Input= styled.input`
  border:none;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>RocketArcade</Logo>
        </Left>
        <Center></Center>
        <Right>
              <MenuBar>Contact</MenuBar>
              <MenuBar>
                  <AddCircleOutline/>
              </MenuBar>
          <SearchContainer>
                <Input/>
                <RocketLaunch style ={{color:"gray", fontSize: 15}}/>
          </SearchContainer>
        </Right>
      </Wrapper>
      </Container>
    
  )
}

export default Navbar