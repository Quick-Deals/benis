import { styled } from "styled-components";

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
  return (
    <Container>
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
  height: 779px;
  padding: 1em;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* position: absolute; */

  @media screen and (max-width: 768px) {
    display: none;
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
`;
