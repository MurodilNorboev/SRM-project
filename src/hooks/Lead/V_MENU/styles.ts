import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 387px;
  height: 662px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--50, #fff);
  padding: 20px;
  gap: 10px;

  .add {
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    width: 347px;
    height: 44px;
    padding: 10px 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid var(--600, #2c2669);
  }

  .from_where {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    border: 1px solid var(--300, #bfbae3);
    max-width: 347px;
    padding: 16px;
    height: 64px;
    flex-shrink: 0;
  }
`;

export const RightCard = styled.div`
  border-radius: 16px;
  height: 100%;
  background: var(--50, #fff);
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;

  .add {
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    width: 347px;
    height: 44px;
    padding: 10px 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid var(--600, #2c2669);
  }

  .from_where {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    border: 1px solid var(--300, #bfbae3);
    max-width: 347px;
    padding: 16px;
    height: 64px;
    flex-shrink: 0;
  }

  .accordionSummery {
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }

  .wrapperContainer {
    display: flex;
    width: 100%;
    align-items: center;
    position: relative; /* Ensures the modal is positioned relative to this container */

    .wrapper {
      display: flex;
      align-items: center;
      gap: 10px;

      .counts {
        color: var(--400, #a098d5);
        font-family: "Public Sans";
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;

        display: flex;
        width: 24px;
        padding: 4px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 999px;
        background: var(--100, #efeef8);
      }
    }
  }

  .accordionDetails {
    padding-top: 10px;

    .datail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      margin-bottom: 10px;
      height: 50px;
      flex-shrink: 0;
      border-radius: 6px;
      background: var(--100, #efeef8);

      .wrapper {
        display: flex;
        align-items: center;
        gap: 8px;

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          fill: var(--600, #2c2669);
          background-color: #2c2669;
          .text {
            color: #fff;
            font-family: "Public Sans";
            font-size: 16px;
            font-weight: 700;
          }
        }

        .profileGroup {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 1px;

          .name {
            color: var(--600, #2c2669);
            font-family: "Public Sans";
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;
          }
          .phone {
            color: var(--400, #a098d5);
            font-family: "Public Sans";
            font-size: 10px;
            font-weight: 400;
            line-height: 14px;
          }
        }
      }

      .dotwrap {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
    }
  }
`;

export const Modal = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100px;
  left: 38%;
  width: 340px;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  display: flex;
  justify-content: space-between;
  padding: 16px;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      color: var(--500, #6053b9);
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      color: var(--300, #bfbae3);
      text-align: right;
      font-family: "Public Sans";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
  }
`;

export const Modal2 = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 70%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 148px;
  padding: 16px;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  margin-left: 180px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(66, 84, 102, 0.2);
  display: flex;
  width: 148px;
  height: 84px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const DropdownItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;
