import { useState } from "react";
import { Edit, Trash, MoreVertical, Plus, MessageCircle } from "lucide-react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

type Column = { key: string; label: string };
type ActionType = "edit" | "delete" | "add" | "sms";
type TableProps = {
  style?: React.CSSProperties;
  data: any[];
  columns: Column[];
  selectable?: boolean;
  showMenu?: boolean;
  actions?: ActionType[];
  showIndex?: boolean;
  nav?: any;
  id: any;
  navigation?: boolean;
};

export const TableComponent = ({
  style,
  data,
  columns,
  selectable = false,
  showMenu = true,
  actions = ["edit", "delete"],
  showIndex = true,
  nav,
  navigation = false,
}: TableProps) => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleMenu = (id: number) => {
    if (navigation) {
      navigate(`/${nav}/${id}`);
    }
  };

  return (
    <Container customStyle={style}>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          boxShadow: "0px -1px 0px 0px #EDF2F7",
          border: "1px solid #BFBAE3",
          width: "100%",
          borderRadius: "15px",
          flexShrink: 1,
          overflow: "scroll",
          maxHeight: "490px",
          margin: "0 auto",
          ...style,
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
              {selectable && (
                <th>
                  <input type="checkbox" />
                </th>
              )}
              {showIndex && <th>#</th>}
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
              {showMenu && <th>Actions</th>}
            </tr>
          </thead>
          <tbody className="tbody">
            {data.map((row, index) => (
              <tr style={{ cursor: "pointer" }} key={row.id}>
                {selectable && (
                  <td onClick={() => toggleMenu(row.id)}>
                    <input type="checkbox" />
                  </td>
                )}
                {showIndex && <td>{index + 1}</td>}
                {columns.map((col) => (
                  <td onClick={() => toggleMenu(row.id)} key={col.key}>
                    {row[col.key]}
                  </td>
                ))}
                {showMenu && (
                  <td>
                    <MoreVertical
                      size={16}
                      onClick={() =>
                        setOpenMenu(openMenu === row.id ? null : row.id)
                      }
                    />
                    {openMenu === row.id && (
                      <div className="phone">
                        {actions.includes("edit") && (
                          <div>
                            <Edit size={16} /> Edit
                          </div>
                        )}
                        {actions.includes("delete") && (
                          <div>
                            <Trash size={16} /> Delete
                          </div>
                        )}
                        {actions.includes("add") && (
                          <div>
                            <Plus size={16} /> Add
                          </div>
                        )}
                        {actions.includes("sms") && (
                          <div>
                            <MessageCircle size={16} /> SMS
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Container>
  );
};
