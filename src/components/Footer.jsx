import { styled } from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Stats>
        <Stat>
          <p>Active Post</p>
          <h2>1,563,569</h2>
        </Stat>
        <Stat>
          <p>Total Users</p>
          <h2>1,563,569</h2>
        </Stat>
        <Stat>
          <p>Total Post</p>
          <h2>1,563,569</h2>
        </Stat>
      </Stats>

      <Links>
        <a href="">Home</a>
        <a href="">Tokenomics</a>
        <a href="">About BENIS</a>
      </Links>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 4em 1em;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 990px) {
    padding: 1em 0em;
  }
`;

const Stats = styled.div`
  border: 4px solid #854426;
  background: #fcf4d1;
  flex: 1;
  width: 100%;
  max-width: 1376px;
  min-height: 134px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;

  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 990px) {
    /* padding: 10px 0; */
  }
`;

const Stat = styled.div`
  text-align: left;
  & p {
    font-size: 24px;
  }

  & h2 {
    font-size: 32px;
  }

  @media screen and (max-width: 990px) {
    & p {
      font-size: 12.018px;
    }

    & h2 {
      font-size: 16.024px;
    }
  }
`;

const Links = styled.div`
  width: 100%;
  margin: 1em auto;
  display: inline-flex;
  justify-content: center;
  gap: 10px;

  & a {
    color: #000;
    font-family: Comic Sans MS;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 10px;
    background: #fcf4d1;
  }

  @media screen and (max-width: 990px) {
    & a {
      font-size: 15.196px;
    }
  }
`;
