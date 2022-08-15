import * as St from "./Card.styled";
type CardPropsType = {
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  className?: string;
};

const ProjectCard = ({
  thumbnail,
  title,
  description,
  tags,
}: CardPropsType) => {
  return (
    <St.Card data-thumbnail={thumbnail}>
      <St.CardContent>
        <St.CardThumbnail>
          <St.CardImg src={thumbnail} />
        </St.CardThumbnail>

        <St.CardTextWrapper>
          <St.CardTitle>{title}</St.CardTitle>
          <St.CardDescription>{description}</St.CardDescription>
          <St.CardTagsWrapper>
            {tags.map((tag) => (
              <St.CardTag>{tag}</St.CardTag>
            ))}
          </St.CardTagsWrapper>
        </St.CardTextWrapper>
        <St.ButtonsWrapper>
          <St.ButtonGit>GitHub</St.ButtonGit>
          <St.ButtonLive>Live</St.ButtonLive>
        </St.ButtonsWrapper>
      </St.CardContent>
    </St.Card>
  );
};

export default ProjectCard;
