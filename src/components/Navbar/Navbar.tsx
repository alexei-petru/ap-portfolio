import Image from "next/image";
import Link from "next/link";
import * as St from "src/components/Navbar/Navbar.styled";
import { BREAKPOINTS_APP } from "src/constants-types/constants";
import { StyledContainer } from "src/styles/Container.styled";

const Navbar = () => {
  return (
    <St.Navbar>
      <StyledContainer>
        <ul>
          <St.LogoWrapper>
            <Link
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
              href="/"
            >
              <St.LogoImageWrapper>
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  sizes={`(max-width: ${BREAKPOINTS_APP.mobileMedium}) 50vw,
             (max-width: ${BREAKPOINTS_APP.tabletLandscape}) 10vw,
              5vw`}
                  src={"/android-chrome-192x192.png"}
                  placeholder="blur"
                  blurDataURL={"/me.jpg"}
                  alt="author image"
                />
              </St.LogoImageWrapper>
              <St.LogoText>Portfolio</St.LogoText>
            </Link>
          </St.LogoWrapper>
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
