import { StyledContainer } from "src/styles/Container.styled";
import * as St from "src/components/Main/Main.styled";
import { CARDS_DATA } from "src/data/localData";
import Card from "src/components/Main/Card/Card";
import React from "react";
import TitleMain from "src/components/Main/TitleMain/TitleMain";

const Main = () => {
  return (
    <St.Main id="projects">
      <StyledContainer>
        <TitleMain />
        <St.CardsSection>
          {CARDS_DATA.map((project) => {
            return (
              <St.CardWrapper key={project.title}>
                <Card
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  thumbnail={project.thumbnail}
                  urlGit={project.urlGit}
                  urlLive={project.urlLive}
                  devStatus={project.devStatus}
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
