import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;
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

export default () => (
  <div>
    <Wrapper id="About">
      <Title>About</Title>
      <Paragraph>
        Osama Saleh guida turistica in israele in italiano, arabo e ebraico.
        israele è un paese molto piccolo e straordinario con zone geografiche
        diverse e gente diverse di colture e di relegioni. allora si può fare
        sci sul monte hermon e arrivare fino al mar morto dove si potra fare una
        nuotata nelle acque salate del mar morto dove si potra apprezzare
        l'assenza di peso e la galleggiabilita, e poi dirigersi ad Eilat per
        immergersi nel mar rosso. e si puo girare nelle zone di Tel Aviv la
        città piu grande in israele e dopo un pò trovarsi in mezzo del deserto a
        meditare sul significato della vita in un antico monastero... e si può
        visitare anche la Galilea sopratutto la città di Nazareth simbolo per la
        cristianità e visitare la chiesa di Annunciazione. se avete deciso di
        fare una vacanza in questa terrasanta vorrei proporvi la mia esperienza,
        la mia conoscenza di archeologia, di storia locale, relegione e arte, e
        per me sara un piacere accompagnarvi alla scoperta di questi luoghi
        particolari, contattatemi senza impegno per possibili itinerari per
        sfruttare al meglio il vostro tempo qui in israele.
      </Paragraph>
    </Wrapper>
  </div>
);
