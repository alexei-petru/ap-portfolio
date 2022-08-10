import React, { useEffect } from "react";
import { TaggedContentCard } from "react-ui-cards";
import { StyledContainer } from "styles/Container.styled";
import * as St from "components/Main/Main.styled";
import { MainGlobalStyles } from "components/Main/Main.styledG";
import { CARDS_INFO } from "data/localData";

const useSetCardsClassNames = () => {
  useEffect(() => {
    const cardDivs = document.querySelectorAll(".card-project div");
    console.log(cardDivs);
    cardDivs.forEach((div, i) => {
      div.classList.add(`card-project-div${i}`);
    });
  }, []);
};

const Main = () => {
  useSetCardsClassNames();
  return (
    <St.Main>
      <StyledContainer>
        <h1>Projects</h1>
        <St.CardsSection>
          {CARDS_INFO.map((project) => {
            return (
              <St.CardWrapper key={project.title}>
                <TaggedContentCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  thumbnail={project.thumbnail}
                  className={"card-project"}
                />
              </St.CardWrapper>
            );
          })}
        </St.CardsSection>
      </StyledContainer>
      <MainGlobalStyles />
    </St.Main>
  );
};

export default Main;
