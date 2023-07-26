import styled from "styled-components";
import Logo from "./Logo";

const NavData = [
  { name: "How to Buy", path: "/", color: "#000", bg: "#FCF4D1" },
  { name: "About Benis", path: "/", color: "#F3E29B", bg: "#243E9B" },
  { name: "Tokenomic", path: "/", color: "#D31B1B", bg: "#600082" },
  { name: "Team", path: "/", color: "#EF780A", bg: "#0BD25B" },
  { name: "Whitepaper", path: "/", color: "#0F8CFF", bg: "#8B1639" },
  { name: "Meme", path: "/", color: "#000", bg: "#FCF4D1" },
  { name: "Porpular thrend", path: "/", color: "#000", bg: "#935335" },
  { name: "Funny pictures", path: "/", color: "#000", bg: "#F00" },
  { name: "Twitter", path: "/", color: "#000", bg: "#FCF4D1" },
  { name: "Telegram", path: "/", color: "#000", bg: "#E64949" },
];

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <NavHeader>
        {NavData.map((link, index) => {
          return (
            <HeaderLinks
              key={`${link.name}-${index}`}
              style={{ color: link.color, background: link.bg }}
            >
              <a href={link.path}>{link.name}</a>
            </HeaderLinks>
          );
        })}
      </NavHeader>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  gap: 2em 5em;
`;

const NavHeader = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  width: 100%;
  max-width: 930px;
  min-width: 769px;
`;
const HeaderLinks = styled.li`
  & a {
    padding: 10px;
    display: flex;
    place-items: center;
    max-height: 53px;
    cursor: pointer;
    font-family: Comic Sans MS;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: inherit;
    height: 100%;
    width: 100%;
  }
`;
