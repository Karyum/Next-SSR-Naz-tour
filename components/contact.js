import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
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

const Contact = () => (
  <Wrapper id="Contact">
    <Title>Contact</Title>
    <Paragraph>
      Wow this tour is about some stuff which i don't know what the hell am i
      even doing im just trying to fill this paragraph with some text just to
      try it.Wow this tour is about some stuff which i don't know what the hell
      am i even doing im just trying to fill this paragraph with some text just
      to try itWow this tour is about some stuff which i don't know what the
      hell am i even doing im just trying to fill this paragraph with some text
      just to try it
    </Paragraph>
  </Wrapper>
);

export default Contact;
