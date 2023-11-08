import Card from "src/components/Main/Card/Card";
import * as St from "src/components/Main/Main.styled";
import TitleMain from "src/components/Main/TitleMain/TitleMain";
import { CARDS_DATA } from "src/data/localData";
import { StyledContainer } from "src/styles/Container.styled";

const Main = () => {
  return (
    <St.Main id="projects">
      <StyledContainer>
        <St.MainInner>
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
        </St.MainInner>
      </StyledContainer>
    </St.Main>
  );
};

export default Main;
