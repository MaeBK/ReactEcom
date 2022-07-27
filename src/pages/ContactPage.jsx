import styled from "style-components";

const Container= styled.div`
    width: 100vw;
    height:100vh;
    background: linear-gradiant(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
    ),
    url('images/spacebackground.jpeg') center;

    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper= styled.div`
    width: 40%;
    padding: 20px;
    background-color: #D1D7E0;
`;
const Title= styled.h1`
    font-size: 25px;    
    font-weight: 300;
`;
const Form= styled.form`
    display: flex;
    flex: wrap;
`;
const Input= styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Button= styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px:
    background-color: #4C495D;
    color: #D1D7E0;
`;

const ContactPage = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Please Contact Us</Title>
            <Form>
                <Input placeholder="Name || GamerTag"/>
                <Input placeholder="Email"/>
                <Input placeholder="Phone Number (Optional)"/>
                <Input placeholder="Are we missing a product you want? Let us know!!"/>
                <Button>Send It</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default ContactPage