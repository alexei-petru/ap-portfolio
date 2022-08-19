import { useState } from "react";
import * as St from "./Card.styled";
type CardPropsType = {
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  urlGit: string;
  urlLive: string;
};

const ProjectCard = ({
  thumbnail,
  title,
  description,
  tags,
  urlGit,
  urlLive,
}: CardPropsType) => {
  const [isCardHover, setIsCardHover] = useState(false);
  return (
    <St.Card
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
      data-thumbnail={thumbnail}
    >
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
        <St.ButtonsWrapper isCardHover={isCardHover}>
          <St.LinkGit
            href={`${urlGit === "#" ? "javascript:void(0)" : urlGit}`}
            target={`${urlGit === "#" ? "_parent" : "_blank"}`}
            isCardHover={isCardHover}
            isDisabled={urlGit === "#"}
          />
          <St.LinkLive
            href={`${urlLive === "#" ? "javascript:void(0)" : urlLive}`}
            target={`${urlLive === "#" ? "_parent" : "_blank"}`}
            isCardHover={isCardHover}
            isDisabled={urlLive === "#"}
          />
        </St.ButtonsWrapper>
      </St.CardContent>
    </St.Card>
  );
};

export default ProjectCard;
