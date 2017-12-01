import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 10rem;
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
  margin-bottom: 5rem;
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

export default () => (
  <div>
    <Wrapper id="About">
      <Title>About</Title>
      <Paragraph>
        Wow this tour is about some stuff which i don't know what the hell am i
        even doing im just trying to fill this paragraph with some text just to
        try it.Wow this tour is about some stuff which i don't know what the
        hell am i even doing im just trying to fill this paragraph with some
        text just to try itWow this tour is about some stuff which i don't know
        what the hell am i even doing im just trying to fill this paragraph with
        some text just to try it
      </Paragraph>
    </Wrapper>
    <ImageWrapper>
      <Image src="../static/naz.png" />
    </ImageWrapper>
  </div>
);
