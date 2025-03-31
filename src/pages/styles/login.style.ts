import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 105px 30px;
  height: 100%;
  width: 100%;
  background: var(--100, #efeef8);
  display: flex;
  gap: 30px;
  align-items: start;
`;

export const LeftContent = styled.div`
  border-radius: 20px;
  background: var(--50, #fff);
  padding: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;
  height: 890px;
  h1 {
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 133.333% */
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 70px;
      border-radius: 10px;
    }
  }
  .line {
    height: 1px;
    background: #6053b9;
  }

  .bottom {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .text1 {
      display: flex;
      align-items: center;
      h2 {
        color: var(--600, #2c2669);
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px; /* 114.286% */
      }
      h3 {
        color: var(--500, #6053b9);
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
      }
    }
    .text2 {
      cursor: pointer;
      color: #6053b9;
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px; /* 114.286% */
    }
  }

  .bottom2 {
    display: flex;
    align-items: center;
    cursor: pointer;

    h5 {
      color: var(--600, #2c2669);
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
    }
    h2 {
      cursor: pointer;
      color: var(--600, #2c2669);
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px; /* 114.286% */
    }
  }
`;
export const RightContent = styled.div`
  flex: 1.7;
  img {
    border-radius: 20px;
    width: 100%;
    height: 890px;
  }
`;
