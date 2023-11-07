import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import * as St from "src/components/Navbar/Navbar.styled";
import { StyledContainer } from "src/styles/Container.styled";

const Navbar = () => {
  return (
    <St.Navbar>
      <StyledContainer>
        <ul>
          <St.LogoWrapper>
            <Link href="/">A.P. Portfolio</Link>
          </St.LogoWrapper>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <a
              href="https://github.com/alexei-petru"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to github"
              aria-label="Go to github"
            >
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </StyledContainer>
    </St.Navbar>
  );
};

export default Navbar;
