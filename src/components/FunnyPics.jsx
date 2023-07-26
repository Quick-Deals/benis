import { styled } from "styled-components";
import { funnyPics, logo } from "../assets";

const FunnyPics = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <p>Funny pics</p>
      </Header>

      <ImgContainer />
    </Container>
  );
};

export default FunnyPics;

const Container = styled.section`
  margin: 4em auto;
  width: 100%;
  padding: 2em 1em;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;

  @media screen and (max-width: 990px) {
    font-size: 16px;
  }
`;

const Logo = styled.div`
  width: 118.99px;
  height: 89px;
  background: url(${logo}) no-repeat center/contain;

  @media screen and (max-width: 990px) {
    width: 61.251px;
    height: 45.813px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2em;
  height: 100vh;
  max-height: 1100px;
  max-width: 1280px;
  margin-left: auto;
  background: url(${funnyPics}) no-repeat;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 768px) {
    max-height: 70vw;
  }
`;
