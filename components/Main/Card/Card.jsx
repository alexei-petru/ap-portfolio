import React from "react";
import * as St from "./Card.styled";

const ProjectCard = ({ thumbnail, title, description, tags }) => {
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
