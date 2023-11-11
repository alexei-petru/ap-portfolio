import Link from "next/link";
import * as St from "src/components/Navbar/Navbar.styled";
import { StyledContainer } from "src/styles/Container.styled";

const Navbar = () => {
  return (
    <St.Navbar>
      <StyledContainer>
        <ul>
          <li style={{ marginRight: "auto" }}>
            <Link href="/">AP Portfolio</Link>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <St.GithubLogoWrapper>
            <St.GithubLogoLink
              href="https://github.com/alexei-petru"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to github"
              aria-label="Go to github"
            >
              <St.GithubLogoSvg />
            </St.GithubLogoLink>
          </St.GithubLogoWrapper>
        </ul>
      </StyledContainer>
    </St.Navbar>
  );
};

export default Navbar;
