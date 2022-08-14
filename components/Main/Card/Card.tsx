import * as St from "./Card.styled";
type CardPropsType = {
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  className?: string;
};

const ProjectCard = ({
  // thumbnail,
  title,
}: // description,
// tags,
CardPropsType) => {
  return (
    <St.Card>
      {/* <CardOverlay thumbnail={thumbnail} />
      <CardContent
        thumbnail={thumbnail} 
        title={title}
        description={description}
        tags={tags}
      /> */}
      <p style={{ color: "black", fontSize: "24px" }}>{title}</p>
    </St.Card>
  );
};

export default ProjectCard;
