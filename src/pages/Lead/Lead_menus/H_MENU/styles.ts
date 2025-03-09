import styled from "styled-components";

export const TableContainer = styled.div`
  background: #f7f6fc;
  padding: 20px;
  border-radius: 12px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background: #f0ebff;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:hover {
    background: #f9f9f9;
  }
`;

export const TableHeader = styled.th`
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #6b6b6b;
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.div<{ src?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => (props.src ? `url(${props.src})` : "#8f77ff")};
  background-size: cover;
  background-position: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 0;
  z-index: 10;
  right: 16px;
  top: 40px;
  min-width: 150px;
`;

export const DropdownItem = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b6b6b;
  cursor: pointer;
  &:hover {
    background: #f7f6fc;
    color: #8f77ff;
  }
`;