import styled from "styled-components";

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
  margin-bottom: 2rem;
  margin: 0erm;
  color: #666;
`;

const Contact = () => (
  <Wrapper id="Contact">
    <Title>Contact</Title>
    <Paragraph>Call: +972 (0) 526560670</Paragraph>
    <Paragraph>Email: osama.saleh236@gmail.com</Paragraph>
  </Wrapper>
);

export default Contact;
