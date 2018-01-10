import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 8rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 80%;
  @media (min-width: 60em) {
    width: 65%;
  }
`;

const Title = styled.h1`
  color: #609a84;
  font-size: 2rem;
  @media (min-width: 60em) {
    font-size: 3rem;
  }
  font-weight: 400;
  margin: 0rem;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  @media (min-width: 60em) {
    font-size: 2rem;
  }
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin: 0erm;
  color: #666;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
`;

const Tour = () => (
  <Wrapper id="Tour">
    <Title>Tour</Title>
    <Paragraph>Dome of the Rock</Paragraph>
    <Image src="../static/dome-of-the-rock.jpg" />
    <Paragraph>Church of the Holy Sepulchre</Paragraph>
    <Image src="../static/church-of-the-holy-sepulchre.jpg" />
    <Paragraph>Dead Sea</Paragraph>
    <Image src="../static/dead-sea.jpg" />
    <Paragraph>Tel Aviv</Paragraph>
    <Image src="../static/tel-aviv.jpg" />
    <Paragraph>Hermon Mountain</Paragraph>
    <Image src="../static/hermon-mountain.jpg" />
    <Paragraph>Nazareth</Paragraph>
    <Image src="../static/naz.png" />
  </Wrapper>
);

export default Tour;
