import React from "react";
import { TaggedContentCard } from "react-ui-cards";
import { StyledContainer } from "../../styles/Container.styled";
import * as St from "./Main.styled";
import { CARDS_INFO } from "../../Data/localData";

const Main = () => {
  return (
    <St.Main>
      <StyledContainer>
        <St.CardsSection>
          {CARDS_INFO.map((project) => {
            return (
              <St.CardWrapper key={project.title}>
                <TaggedContentCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  thumbnail={project.thumbnail}
                />
              </St.CardWrapper>
            );
          })}
        </St.CardsSection>
      </StyledContainer>
      <St.MainGlobalStyles />
    </St.Main>
  );
};

export default Main;
