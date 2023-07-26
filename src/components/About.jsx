import { styled } from "styled-components";
import { card1, card2 } from "../assets";

const LINKS = [
  { name: "Business & Finance", path: "" },
  { name: "Travel", path: "" },
  { name: "Fitness", path: "" },
  { name: "Paranormal", path: "" },
  { name: "Advice", path: "" },
  { name: "LGBT", path: "" },
  { name: "Pony", path: "" },
  { name: "Current News", path: "" },
  { name: "Worksafe Requests", path: "" },
  { name: "Very Important Posts", path: "" },
  { name: "Misc. (NSFW)", path: "" },
  { name: "Random", path: "" },
  { name: "ROBOT9001", path: "" },
  { name: "Politically Incorrect", path: "" },
  { name: "International/Random", path: "" },
  { name: "Cams & Meetups", path: "" },
  { name: "Shit 4chan Says", path: "" },
  { name: "Adult (NSFW)", path: "" },
];

const LINKS2 = [
  { name: "Video Games", path: "" },
  { name: "Video Game Generals", path: "" },
  { name: "Video Games/Multiplayer", path: "" },
  { name: "Video Games/Mobile", path: "" },
  { name: "Pokémon", path: "" },
  { name: "Retro Games", path: "" },
  { name: "Video Games/RPG", path: "" },
  { name: "Video Games/Strategy", path: "" },
];

const About = () => {
  return (
    <Container>
      <Header>About BENIS</Header>
      <Card1>
        <p>
          Before the year 2023, when time did not exist, the universe manifested
          a store of value. The identification of this value is best described
          as the Quest (sometimes the Quest of Hallows). Anyone can relive the
          manifestation by charging their core of Neptune with enough opal as
          they sleep. But I understand that there isn’t enough Opal to go around
          for everyone and some people haven’t Ascended. So I’ll report it here
          as well. There have been other Ascended who have identified this event
          as well, but have failed to interpret its tenets and apply them in
          real life. One such Ascended has been gifted with the visions of the
          necessity of speed as well as foresee the critical universal event
        </p>
        <div className="image" />
      </Card1>
      <Card2>
        <Links1>
          {LINKS.map((link, index) => (
            <li key={`${link.name}-${index}`}>
              <a href="">{link.name}</a>
            </li>
          ))}
        </Links1>
        <Links1>
          {LINKS2.map((link, index) => (
            <li key={`${link.name}-${index}`}>
              <a href="">{link.name}</a>
            </li>
          ))}
        </Links1>
        <Links1 className="absolute bottom">
          {LINKS2.map((link, index) => (
            <li key={`${link.name}-${index}`}>
              <a href="">{link.name}</a>
            </li>
          ))}
        </Links1>
      </Card2>
    </Container>
  );
};

export default About;

const Container = styled.section`
  padding: 1em;

  @media screen and (max-width: 768px) {
    padding: 1em 0;
  }
`;

const Header = styled.header`
  color: #000;
  font-family: Comic Sans MS;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  margin: 1em 0;
`;

const Card1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4em;
  position: relative;

  & p {
    color: #000;
    font-family: Comic Sans MS;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    max-width: 896px;
  }

  & div.image {
    /* position: absolute;
    left: 100%; */
    min-width: 261px;
    height: 203px;
    background: url(${card1}), lightgray 50% / cover no-repeat;
  }

  @media screen and (max-width: 1120px) {
    & div.image {
      display: none;
    }
  }
`;

const Card2 = styled.div`
  max-width: 1059px;
  max-height: 779px;
  border: 4px solid #9c5838;
  padding: 3em 2em;
  margin: 4em auto;
  display: flex;
  position: relative;
  background: url(${card2}), lightgray 50% / contain no-repeat;

  @media screen and (max-width: 768px) {
    width: MIN(100%, 375.199px);
    padding: 1em;
    background-size: 100%;
  }
`;

const Links1 = styled.ul`
  padding: 0;
  padding-inline-start: 2em;
  margin: 0;
  color: #854426;
  width: MIN(349px, 85%);

  & li {
     font-size: 24px;
  }

  & li > a {
    color: inherit;
    font-family: Comic Sans MS;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }

  &.absolute {
    position: absolute;

    &.top {
      top: 0;
    }

    &.bottom {
      bottom: 3em;
      right: 2em;
    }
  }

  @media screen and (max-width: 768px) {
    width: MIN(164.748px, 85%);
    padding: 0;

    & li {
      font-size: 8.503px;
    }

    & li > a {
      font-size: 8.503px;
    }

    &.absolute {
      position: absolute;

      &.top {
        top: 0;
      }

      &.bottom {
        bottom: 3em;
        right: 0;
      }
    }
  }
`;
