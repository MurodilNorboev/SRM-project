import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  background: #fff;
  padding: 0px 50px;
  position: fixed;
  h1 {
    cursor: pointer;
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }
`;
export const RightContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  h2 {
    color: var(--Ocean-dark, #1e1e1e);
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    cursor: pointer;
  }
`;
