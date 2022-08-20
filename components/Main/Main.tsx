import { StyledContainer } from "styles/Container.styled";
import * as St from "components/Main/Main.styled";
import { CARDS_INFO } from "data/localData";
import Card from "components/Main/Card/Card";
import React from "react";
import MainTitle from "components/Main/MainTitle/MainTitle";

const Main = () => {
  return (
    <St.Main>
      <StyledContainer>
        <MainTitle />
        <St.CardsSection>
          {CARDS_INFO.map((project) => {
            return (
              <St.CardWrapper key={project.title}>
                <Card
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  thumbnail={project.thumbnail}
                  urlGit={project.urlGit}
                  urlLive={project.urlLive}
                />
              </St.CardWrapper>
            );
          })}
        </St.CardsSection>
      </StyledContainer>
    </St.Main>
  );
};

export default Main;
