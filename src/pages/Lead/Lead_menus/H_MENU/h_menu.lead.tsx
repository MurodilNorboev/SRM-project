import { useState } from "react";
import styled from "styled-components";
import { MoreHorizontal, Edit, Trash } from "lucide-react";

export const TableView = ({ leads }: any) => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>#</Th>
          <Th>Lead name</Th>
          <Th>Phone</Th>
          <Th>From</Th>
          <Th>Section</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead: any, index: number) => (
          <Tr key={lead.id}>
            <Td>{index + 1}</Td>
            <Td>{lead.name}</Td>
            <Td>{lead.phone}</Td>
            <Td>{lead.from}</Td>
            <Td>{lead.section}</Td>
            <Td>
              <MoreButton onClick={() => toggleMenu(lead.id)}>
                <MoreHorizontal />
              </MoreButton>
              {openMenu === lead.id && (
                <Dropdown>
                  <DropdownItem>
                    <Edit size={16} /> Edit
                  </DropdownItem>
                  <DropdownItem>
                    <Trash size={16} /> Delete
                  </DropdownItem>
                </Dropdown>
              )}
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f5f5f5;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 12px;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
`;

const DropdownItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;