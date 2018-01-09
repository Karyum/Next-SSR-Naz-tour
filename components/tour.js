import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  @media (min-width: 60em) {
    width: 50%;
  }
`;

const Title = styled.h1`
  color: #609a84;
  font-size: 3rem;
  font-weight: 400;
  margin: 0rem;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin: 0erm;
  color: #666;
`;

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  @media (max-width: 60em) {
    height: 50%;
  }
`;

const ImageWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

const Tour = () => (
  <Wrapper id="Tour">
    <Title>Tour</Title>
    <Paragraph>Nazareth</Paragraph>
    <ImageWrapper>
      <Image src="../static/naz.png" />
    </ImageWrapper>
  </Wrapper>
);

export default Tour;
