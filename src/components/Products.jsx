import styled from "styled-components";
import { coolProducts } from "../data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

const Products = () => {
  return (
    <Container>
        {coolProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products