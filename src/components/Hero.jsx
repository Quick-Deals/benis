import { styled } from "styled-components";
import PrimaryNav from "./PrimaryNav";

const Hero = () => {
  return (
    <MainContainer>
      <PrimaryNav />
      <Container>
        <Header>
          BENIS YOUR NEXT <span>MEME TOKEN</span> WITH GREAT POTENTIAL{" "}
        </Header>
        <Link>see latest BENIS</Link>
        <Images></Images>
      </Container>
    </MainContainer>
  );
};

export default Hero;

const MainContainer = styled.section`
display: flex;
gap: 2em;
`;

const Container = styled.section`
flex: 1;
`;

const Header = styled.header`
  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin: 0.5em 0;

  & span {
    background: linear-gradient(180deg, #d31b1b 0%, #0036a0 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Comic Sans MS;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Link = styled.a`
  color: #000;
  font-family: Comic Sans MS;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

const Images = styled.div`
  position: relative;
`;
