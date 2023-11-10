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
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  thumbnail={project.thumbnail}
                  urlGit={project.urlGit}
                  urlLive={project.urlLive}
                  devStatus={project.devStatus}
                />
              );
            })}
          </St.CardsSection>
        </St.MainInner>
      </StyledContainer>
    </St.Main>
  );
};

export default Main;
