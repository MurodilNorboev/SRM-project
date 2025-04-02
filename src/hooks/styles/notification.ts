import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  gap: 16px;
`;


export const ListContainer = styled.div`
  background: #f5f3ff;
  padding: 16px;
  border-radius: 12px;
  width: 100%;
  max-width: 300px;
`;

export const BlogItemWrapper = styled.div<{ active?: boolean }>`
  background: ${(props) => (props.active ? "#ede9fe" : "white")};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid #ddd;

  &:hover {
    background: #ece4ff;
  }
`;

export const Title = styled.h4`
  font-size: 14px;
  color: #2e2e5d;
  font-weight: 600;
`;

export const Date = styled.p`
  font-size: 12px;
  color: #6b6b8f;
  margin-top: 4px;
`;

export const Views = styled.span`
  font-size: 12px;
  color: #6b6b8f;
  float: right;
`;

export const DetailsContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  flex-grow: 1;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 12px;
`;