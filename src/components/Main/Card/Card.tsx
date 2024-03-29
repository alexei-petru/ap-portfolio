import { useState } from "react";
import * as St from "./Card.styled";
import Image from "next/image";
import { BREAKPOINTS_APP } from "src/constants-types/constants";
type CardPropsType = {
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  urlGit: string;
  urlLive: string;
  devStatus: {
    text: string;
    colors: { textColor: string; backgroundColor: string };
  };
};

const ProjectCard = ({
  thumbnail,
  title,
  description,
  tags,
  urlGit,
  urlLive,
  devStatus,
}: CardPropsType) => {
  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <St.Card
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
      thumbnail={thumbnail}
    >
      <St.CardContent>
        <St.ProjectStatusWrapper>
          <St.ProjectStatus colors={devStatus.colors}>
            {devStatus.text}
          </St.ProjectStatus>
        </St.ProjectStatusWrapper>
        <St.CardThumbnailWrapper>
          <St.CardImgWrapper>
            <Image
              fill
              alt={title}
              quality={100}
              src={thumbnail}
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={thumbnail}
              sizes={`
              (max-width: ${BREAKPOINTS_APP.mobileMedium}) 200vw,
              (max-width: ${BREAKPOINTS_APP.tabletLandscape}) 100vw,
              (max-width: ${BREAKPOINTS_APP.laptopMedium}) 50vw,
              (max-width: ${BREAKPOINTS_APP.desktopLarge}) 30vw,
                10vw`}
            />
          </St.CardImgWrapper>
        </St.CardThumbnailWrapper>
        <St.CardTextWrapper>
          <St.CardTitle>{title}</St.CardTitle>
          <St.CardDescription>{description}</St.CardDescription>
          <St.CardTagsWrapper>
            {tags.map((tag) => (
              <St.CardTag key={tag}>{tag}</St.CardTag>
            ))}
          </St.CardTagsWrapper>
        </St.CardTextWrapper>
        <St.ButtonsWrapper isCardHover={isCardHover}>
          <St.LinkGit
            href={urlGit}
            target={`${urlGit === "#" ? "_parent" : "_blank"}`}
            isCardHover={isCardHover}
            isDisabled={urlGit === "#"}
            onFocus={() => setIsCardHover(true)}
            onBlur={() => setIsCardHover(false)}
            title={`Go to git ${title}`}
            aria-label={`Go to git ${title}`}
          />
          <St.LinkLive
            href={urlLive}
            target={`${urlLive === "#" ? "_parent" : "_blank"}`}
            isCardHover={isCardHover}
            isDisabled={urlLive === "#"}
            onFocus={() => setIsCardHover(true)}
            onBlur={() => setIsCardHover(false)}
            title={`Go to live ${title}`}
            aria-label={`Go to live ${title}`}
          />
        </St.ButtonsWrapper>
      </St.CardContent>
    </St.Card>
  );
};

export default ProjectCard;
