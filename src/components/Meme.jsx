import { styled } from "styled-components";
import { bill, blade, cat, laugh, monkey, meme } from "../assets";

const Meme = () => {
  return (
    <Container>
      <Header>Meme</Header>
      <ImgContainer>
        <Image className="bill" />
        <Image className="monkey" />
        <Image className="cat" />
        <Image className="laugh" />
        <Image className="blade" />
        <Image className="meme" />
      </ImgContainer>
    </Container>
  );
};

export default Meme;

const Container = styled.section``;

const Header = styled.header`
  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2em;
  min-height: 1100px;
  max-width: 1280px;
  margin-left: auto;
`;

const Image = styled.div`
  position: absolute;
  &.bill {
    top: 10%;
    width: MIN(40%, 415px);
    height: 262px;
    background: url(${bill}), lightgray 50% / cover no-repeat;
  }

  &.monkey {
    left: 54.5%;
    transform: translateX(-50%);
    width: MIN(40%, 415px);
    height: 474px;
    background: url(${monkey}), lightgray 50% / cover no-repeat;
  }

  &.cat {
    width: MIN(40%, 335px);
    top: 8%;
    right: 0;
    height: 368px;
    background: url(${cat}), lightgray 50% / cover no-repeat;
  }

  &.laugh {
    width: MIN(40%, 324px);
    height: 288px;
    top: 438px;
    top: 40%;
    left: 10%;
    z-index: 1;
    background: url(${laugh}), lightgray 50% / cover no-repeat;
  }

  &.blade {
    width: MIN(40%, 789px);
    width: MIN(60%, 789px);
    height: 522px;
    background: url(${blade}), #f3e29b 50% / cover no-repeat;
    stroke-width: 1px;
    stroke: #724129;
    bottom: 0;
    left: 40%;
    transform: translateX(-50%);
    z-index: 0;
  }

  &.meme {
    width: MIN(40%, 324px);
    height: 288px;
    right: 0;
    top: 438px;
    top: 50%;
    background: url(${meme}), lightgray 50% / cover no-repeat;
  }
`;
