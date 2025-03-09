import { useState } from "react";
import styled from "styled-components";
import { MoreHorizontal, Edit, Trash } from "lucide-react";

export const CardView = ({ leads }: any) => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <CardContainer>
      {leads.map((lead: any) => (
        <Card key={lead.id}>
          <CardHeader>
            <Avatar>{lead.avatar}</Avatar>
            <Info>
              <Name>{lead.name}</Name>
              <Phone>{lead.phone}</Phone>
            </Info>
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
          </CardHeader>
        </Card>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 250px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: #6c5ce7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: bold;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Phone = styled.div`
  color: gray;
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