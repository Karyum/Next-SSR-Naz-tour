import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 8rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  @media (min-width: 60em) {
    width: 65%;
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
  margin-bottom: 5rem;
`;

const Tour = () => (
  <Wrapper id="Tour">
    <Title>Tour</Title>
    <Paragraph>Dome of the Rock</Paragraph>
    <ImageWrapper>
      <Image src="../static/dome-of-the-rock.jpg" />
    </ImageWrapper>
    <Paragraph>Church of the Holy Sepulchre</Paragraph>
    <ImageWrapper>
      <Image src="../static/church-of-the-holy-sepulchre.jpg" />
    </ImageWrapper>
    <Paragraph>Dead Sea</Paragraph>
    <ImageWrapper>
      <Image src="../static/dead-sea.jpg" />
    </ImageWrapper>
    <Paragraph>Tel Aviv</Paragraph>
    <ImageWrapper>
      <Image src="../static/tel-aviv.jpg" />
    </ImageWrapper>
    <Paragraph>Hermon Mountain</Paragraph>
    <ImageWrapper>
      <Image src="../static/hermon-mountain.jpg" />
    </ImageWrapper>
    <Paragraph>Nazareth</Paragraph>
    <ImageWrapper>
      <Image src="../static/naz.png" />
    </ImageWrapper>
  </Wrapper>
);

export default Tour;
