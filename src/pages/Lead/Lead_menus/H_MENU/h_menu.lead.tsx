import { useState } from "react";
import { MoreHorizontal, Edit, Trash, DotIcon, MoreVerticalIcon } from "lucide-react";
import Link from "@mui/joy/Link";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import { Container } from "./styles";

export const TableView = ({ leads }: any) => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <Container>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          border: "1px solid #BFBAE3",
          width: "100%",
          borderRadius: "15px",
          flexShrink: 1,
          overflow: "scroll",
          maxHeight: "490px",
          margin: "0 auto",
        }}
      >
        <Table
          className="Table"
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            width: "100%",
            tableLayout: "fixed",
            maxHeight: "49px",
            overflow: "scroll",
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          }}
        >
          <thead className="thead">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>From</th>
              <th>Section</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {leads.map((lead: any, index: number) => (
              <tr key={lead.id}>
                <td>{index + 1}</td>
                <td>{lead.name}</td>
                <td className="phone">{lead.phone}</td>
                <td>{lead.from}</td>
                <td>{lead.section}</td>
                <td>
                  <MoreVerticalIcon style={{position: "absolute", right: "20px",marginTop: "-5px"}} size={16} onClick={() => toggleMenu(lead.id)} />
                  {openMenu === lead.id && (
                    <div className="phone">
                      <div>
                        <Edit size={16} /> Edit
                      </div>
                      <div>
                        <Trash size={16} /> Delete
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Container>
  );
};
