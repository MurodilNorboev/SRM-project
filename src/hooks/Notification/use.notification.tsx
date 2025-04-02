import React, { useState } from "react";
import BlogList from "./use.logList";
import BlogDetails from "./use.details";
import { PageContainer } from "../styles/notification";
import { blogs } from "../types_mock/notification";

const NotificationDatail: React.FC = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number>(blogs[0].id);

  const selectedBlog = blogs.find((blog) => blog.id === selectedBlogId);

  return (
    <PageContainer>
      <BlogList
        blogs={blogs}
        selectedBlog={selectedBlogId}
        onSelect={setSelectedBlogId}
      />
      {selectedBlog && (
        <BlogDetails
          title={selectedBlog.title}
          content={selectedBlog.content}
        />
      )}
    </PageContainer>
  );
};

export default NotificationDatail;
