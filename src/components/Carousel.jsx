import styled from "styled-components";
import {KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight} from "@material-ui/icons";
import {sliderItems} from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;
//__________Arrows_________________
const Arrow = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#D1D7E0;
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content:center;
    position:absolute;
    top: 0;
    botoom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin; auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
//__________The Inny Bits___________________________

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=> props.bg};
`;
const ImageContainer = styled.div`
    height: 100%;
    flex:1;
`;

const Image = styled.img`
    height: 80%;

`;

const InfoContainer = styled.div`
    padding: 50px;
    flex:1;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 250;
    letter-space: 2px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
`;

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState (0);
        const handleClick = (direction) => {
            if(direction === "left"){
                setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
            } else {
                setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )
            }
        };
  return (
    <Container>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
            <KeyboardDoubleArrowLeft/>
        </Arrow>
            <Wrapper slideIndex= {slideIndex}>
            {sliderItems.map((item)=> (
                <Slide bg= {item.bg} key={item.id} >
                    <ImageContainer>
                        <Image src= {item.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Look Here!</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
        <Arrow direction = "right" onClick={() => handleClick("right")}>
            <KeyboardDoubleArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Carousel