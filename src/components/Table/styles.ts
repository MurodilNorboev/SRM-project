import styled from "styled-components";

export const Container = styled.div<{ customStyle?: React.CSSProperties }>`
  display: flex;
  position: absolute;
  top: 210px;
  padding-right: 40px;
  align-items: start;
  ${({ customStyle }) => customStyle && { ...customStyle }}

  .Table {
    .thead {
      th {
        padding-bottom: 10px;
        color: var(--400, #a098d5);
        font-family: "Public Sans";
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 14px; /* 116.667% */
      }
    }
    .tbody {
      td {
        color: var(--600, #2c2669);
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px; /* 114.286% */
      }
      .phone {
        color: var(--500, #6053b9);
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 114.286% */
        z-index: 999999999;
      }
    }
  }
`;
