import { useEffect, useRef, useState } from "react";
import { Edit, Trash } from "lucide-react";
import { AddIcon, AnyIcon, DotIcon, SmsIcon } from "./VMenuIcon";
import {
  CardContainer,
  Card,
  MoreButton,
  Dropdown,
  DropdownItem,
  RightCard,
  Modal,
  Modal2,
} from "./styles";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { Lead } from "../../mock";
import { useColorScheme } from "@mui/joy/styles";

export const CardView = ({ leads }: { leads: Lead[] }) => {
  const { mode } = useColorScheme();
  const [openMenu, setOpenMenu] = useState<number | null | false>(null);
  const [openI, setOpenI] = useState<number | null>(null); // Modalni ID bo'yicha ochish
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenI(null);
      }
    };

    if (openI !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openI]);

  const count = leads.reduce((acc: any, lead: any) => {
    acc[lead.from] = acc[lead.from] ? acc[lead.from] + 1 : 1;
    return acc;
  }, {});

  return (
    <CardContainer>
      <Card
        style={{
          background: mode === "dark" ? "#121120" : "#fff",
          border: mode === "dark" ? "1px solid #2C2669" : "1px solid #BFBAE3",
        }}
      >
        <h1>From where</h1>
        <div className="add">
          <AddIcon addIcon="#2C2669" />
        </div>

        {Object.entries(count).map(([from, length]: any, index) => (
          <div
            className="from_where"
            key={index}
            onClick={() => toggleMenu(from)}
          >
            <div>
              <div>{from}</div>
              <div>{length}</div>
            </div>

            <MoreButton onClick={() => toggleMenu(from)}>
              <DotIcon dotIcon="#BFBAE3" />
            </MoreButton>

            {openMenu === from && (
              <Dropdown>
                <DropdownItem onClick={() => toggleMenu(from)}>
                  <Edit size={16} /> Edit
                </DropdownItem>
                <DropdownItem onClick={() => toggleMenu(from)}>
                  <Trash size={16} /> Delete
                </DropdownItem>
              </Dropdown>
            )}
          </div>
        ))}
      </Card>

      <RightCard
        style={{
          background: mode === "dark" ? "#121120" : "#fff",
          border: mode === "dark" ? "1px solid #2C2669" : "1px solid #BFBAE3",
        }}
      >
        <h1>Sections</h1>
        <div className="add">
          <AddIcon addIcon="#2C2669" />
        </div>

        <AccordionGroup
          sx={(theme) => ({
            gap: "10px",
            [`& .${accordionClasses.root}`]: {
              borderRadius: "6px",
              minHeight: "64px",
              paddingTop: "10px",
              border: "1px solid var(--300, #BFBAE3)",
              transition: "0.2s ease",

              '& button:not([aria-expanded="true"])': {
                transition: "0.2s ease",
              },
              "& button:hover": {
                background: "transparent",
              },
            },
            [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
              bgcolor: "transparent",
              borderRadius: "md",
              borderColor: "none",
            },
          })}
        >
          {leads.map((val: any, ind: number) => {
            return (
              <Accordion key={ind}>
                <div className="wrapperContainer">
                  <AccordionSummary className="accordionSummery">
                    <div className="wrapper">
                      {val.section}
                      <div className="counts">{val.Rekvizitlar.length}</div>
                    </div>
                  </AccordionSummary>
                  <MoreButton style={{ marginTop: "5px" }}>
                    <DotIcon dotIcon="#BFBAE3" />
                  </MoreButton>
                </div>

                <AccordionDetails className="accordionDetails">
                  <div className="datail">
                    <div className="wrapper">
                      <div className="logo">
                        <div className="text">A</div>
                      </div>

                      <div className="profileGroup">
                        <div className="name">Shamsiddin Shoraximov</div>
                        <div className="phone">99 875 23 34</div>
                      </div>
                    </div>

                    <div className="dotwrap">
                      <div
                        className="buttonicon"
                        onMouseEnter={() => setOpenI(val.id)}
                        onMouseLeave={() => setOpenI(null)}
                      >
                        <AnyIcon anyIcon="#A098D5" />
                      </div>
                      <MoreButton
                        onMouseEnter={() => setOpenI(val.from)}
                        // onMouseLeave={() => setOpenI(null)}
                        style={{ marginTop: "5px" }}
                      >
                        <DotIcon dotIcon="#BFBAE3" />
                      </MoreButton>
                    </div>
                  </div>

                  {openI === val.id && (
                    <Modal $isOpen={openI === val.id} ref={modalRef}>
                      <div className="left">
                        <h1>Shoraximov Shamsiddin</h1>
                        <h1>+998 99 875 23 34</h1>
                        <h1>01.01.2024</h1>
                      </div>

                      <div className="right">
                        <h1>Full name</h1>
                        <h1>Phone number</h1>
                        <h1>Updated</h1>
                      </div>
                    </Modal>
                  )}

                  {openI === val.from && (
                    <Modal2 $isOpen={openI === val.from}>
                      <DropdownItem
                        ref={modalRef}
                        onClick={() => setOpenI(null)}
                      >
                        <Edit size={16} /> Edit
                      </DropdownItem>
                      <DropdownItem onClick={() => setOpenI(null)}>
                        <Trash size={16} /> Delete
                      </DropdownItem>
                      <DropdownItem onClick={() => setOpenI(null)}>
                        <SmsIcon smsIcon="#A098D5" /> Send SMS
                      </DropdownItem>
                    </Modal2>
                  )}

                  {/* {openMenu === val.id && (
                    <Dropdown>
                      <DropdownItem onClick={() => toggleMenu(val.id)}>
                        <Edit size={16} /> Edit
                      </DropdownItem>
                      <DropdownItem onClick={() => toggleMenu(val.id)}>
                        <Trash size={16} /> Delete
                      </DropdownItem>
                    </Dropdown>
                  )} */}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </AccordionGroup>
      </RightCard>
    </CardContainer>
  );
};
