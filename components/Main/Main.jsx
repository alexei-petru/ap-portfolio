import React, { useEffect } from "react";
import { TaggedContentCard } from "react-ui-cards";
import { StyledContainer } from "styles/Container.styled";
import * as St from "components/Main/Main.styled";
import { MainGlobalStyles } from "components/Main/Main.styledG";
import { CARDS_INFO } from "data/localData";
import ReactDOM from "react-dom";

const useChangeCardsClassNames = () => {
  useEffect(() => {
    const cardDivs = document.querySelectorAll(".card-project div");
    cardDivs.forEach((div, i) => {
      div.classList.add(`card-project-div${i % 8}`);
    });
  }, []);
};

const useAddCardsButtons = () => {
  // useEffect(() => {
  //   const cardButtons = (
  //     <div>
  //       <button>Button1</button>
  //       <button>Button2</button>
  //     </div>
  //   );
  //   const lastDiv = document.querySelector(`.card-project-div7`);
  //   console.log(lastDiv);
  //   // lastDiv.insertAdjacentElement("afterend", cardButtons);
  //   ReactDOM.render(cardButtons, lastDiv); 
  // }, []);
};

const Main = () => {
  useChangeCardsClassNames();
  useAddCardsButtons();
  return (
    <St.Main>
      <StyledContainer>
        <St.ProjectsTitle>Projects</St.ProjectsTitle>
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
