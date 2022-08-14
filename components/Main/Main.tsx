import { StyledContainer } from "styles/Container.styled";
import * as St from "components/Main/Main.styled";
import { MainGlobalStyles } from "components/Main/Main.styledG";
import { CARDS_INFO } from "data/localData";
import Card from "components/Main/Card/Card";

const Main = () => {
  return (
    <St.Main>
      <StyledContainer>
        <St.ProjectsTitle>Projects</St.ProjectsTitle>
        <St.CardsSection>
          {CARDS_INFO.map((project) => {
            return (
              <St.CardWrapper key={project.title}>
                <Card
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
