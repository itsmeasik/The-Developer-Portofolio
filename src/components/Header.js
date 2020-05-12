import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Navigation>
      <div>
        <span>Philippe</span>
        <span>Tedajo</span>
      </div>
      <Section>
        <Link to="home">
          <Anchor>home</Anchor>
        </Link>
        <Link to="projects">
          <Anchor>Projects</Anchor>
        </Link>
        <Link to="about">
          <Anchor>Bio</Anchor>
        </Link>
        <Link to="contact">
          <Anchor>Contact</Anchor>
        </Link>
      </Section>
    </Navigation>
  );
};

export default Header;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  color: ${(props) => props.theme.fontsColor};
  border-bottom: 2px solid ${(props) => props.theme.fontsColor};
`;

const Section = styled.div`
  display: flex;
`;

const Anchor = styled.p`
  margin: 0 1rem;
`;
