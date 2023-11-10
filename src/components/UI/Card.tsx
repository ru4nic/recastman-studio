import { styled } from 'styled-components';
import { borderRadius } from '../layout/Vars';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StyledCard = styled.div`
  background-image: linear-gradient(135deg, #361c3b, rgba(70, 141, 138, 0.9));
  color: #fff;
  text-align: center;
  border-radius: ${borderRadius};
`;
const Header = styled.div`
  padding: 2.5em 1.5em 0;
  padding-bottom: 0;
`;
const Title = styled.div`
  color: #fff;
  font-size: 2em;
  line-height: 1;
  margin-bottom: 0.5em;
`;
const Price = styled.div`
  color: #fff;

  font-size: 3.5em;
`;
const Features = styled.div`
  padding: 1.5em;
`;
const Feature = styled.div`
  font-size: 1em;
  margin-bottom: 1em;
`;
type CardProps = {
  title: string;
  price: string;
  features?: string[];
};
const Card = ({ title, price, features }: CardProps) => {
  return (
    <Wrapper>
      <StyledCard>
        <Header>
          <Title>{title}</Title>
          <Price>{price} </Price>
        </Header>
        <Features>
          {features?.map((feature) => {
            return <Feature key={feature}>{feature}</Feature>;
          })}
        </Features>
      </StyledCard>
    </Wrapper>
  );
};

export default Card;
