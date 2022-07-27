import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #2D283E;
    bakcground-color: #${props => props.color};
    display: flex;
    align-item: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px
    display: flex;
    align-item: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>RocketArcade</Logo>
            <Desc>Getting you ready for any fight, tournement, and debut!</Desc>
        </Left>
        <Center>
            <SocialContainer>
                    <SocialIcon color = "#2D283E">
                        <FacebookIcon/>
                    </SocialIcon>
                        <SocialIcon color = "#2D283E">
                        <InstagramIcon/>
                    </SocialIcon>
            </SocialContainer>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>5542 Bavrovia Ln, Ravenloft 192022</ContactItem>
            <ContactItem>+1 555-422-5542</ContactItem>
            <ContactItem>RocketArcade@gmail.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer