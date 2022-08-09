import React from "react";
import { TaggedContentCard } from "react-ui-cards";
import { StyledContainer } from "../../styles/Container.styled";
import * as St from "./Main.styled";
import { MainGlobalStyles } from "./Main.styledG";
import { CARDS_INFO } from "../../data/localData";

const Main = () => {
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
                  className={"card-projects"}
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
