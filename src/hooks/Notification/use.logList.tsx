import React from "react";
import { BlogListProps } from "../types_mock/notification";
import { BlogItemWrapper, ListContainer, Views, Title } from "../styles/notification";

const BlogList: React.FC<BlogListProps> = ({ blogs, selectedBlog, onSelect }) => {
  return (
    <ListContainer>
      {blogs.map((blog) => (
        <BlogItemWrapper key={blog.id} active={blog.id === selectedBlog} onClick={() => onSelect(blog.id)}>
          <Title>{blog.title}</Title>
          <Date>
            {blog.date} <Views>👁 {blog.views}</Views>
          </Date>
        </BlogItemWrapper>
      ))}
    </ListContainer>
  );
};

export default BlogList;
