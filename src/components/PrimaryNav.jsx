import { styled } from "styled-components";
import { useContext } from "react";
import { ToggleContext } from "../context/toggleContext";

const LINKS = [
  { name: "Comics & Cartoons", path: "/" },
  { name: "Technology", path: "/" },
  { name: "Television & Film", path: "/" },
  { name: "Weapons", path: "/" },
  { name: "Auto", path: "/" },
  { name: "Animals & Nature", path: "/" },
  { name: "Traditional Games", path: "/" },
  { name: "Sports", path: "/" },
  { name: "Extreme Sports", path: "/" },
  { name: "Professional Wrestling", path: "/" },
  { name: "Science & Math", path: "/" },
  { name: "History & Humanities", path: "/" },
  { name: "International", path: "/" },
  { name: "Outdoors", path: "/" },
  { name: "Toys", path: "/" },
];

const PrimaryNav = () => {
  const { toggle } = useContext(ToggleContext);

  return (
    <Container className={`${toggle ? "show" : ""}`}>
      <Header>Interest</Header>
      <Links>
        {LINKS.map((link, index) => (
          <Link key={`${index}`}>
            <a href={"/"}>{link.name}</a>
          </Link>
        ))}
      </Links>
    </Container>
  );
};

export default PrimaryNav;

const Container = styled.div`
  border: 4px solid #9c5838;
  background: #fcf4d1;
  width: 280px;
  max-height: 779px;
  padding: 1em;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* position: absolute; */

  @media screen and (max-width: 990px) {
    position: absolute;
    right: -100%;
    top: 74px;
    z-index: 99;
    max-height: 562px;
    display: none;
    /* transform: right(200%); */
    transition: right 0.8s ease, display 1.6s ease 0.8s;

    &.show {
      display: flex;
      right: 0;
    }
  }
`;

const Header = styled.p`
  color: #854426;
  font-family: Comic Sans MS;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Links = styled.ul`
  width: MIN(100%, 249px);
  padding: 0;
  padding-inline-start: 2em;
  margin: 0;
  list-style: disc;
`;

const Link = styled.li`
  display: list-item;
  color: #854426;

  & a {
    font-family: Comic Sans MS;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    color: #854426;
    text-align: left;
  }

  @media screen and (max-width: 990px) {
    font-size: 16px;
    & a {
      font-size: 16px;
    }
  }
`;
