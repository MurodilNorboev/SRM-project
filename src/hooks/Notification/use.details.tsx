import React from "react";
import { BlogDetailsProps } from "../types_mock/notification";
import { Content, DetailsContainer, Title } from "../styles/notification";

const BlogDetails: React.FC<BlogDetailsProps> = ({ title, content }) => {
  return (
    <DetailsContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </DetailsContainer>
  );
};

export default BlogDetails;
