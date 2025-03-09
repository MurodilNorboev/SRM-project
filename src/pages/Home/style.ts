import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 100%;
    flex: 1.5;
    gap: 30px;
    h3 {
      text-align: center;
      color: #fff;
      text-align: center;
      font-family: "Public Sans";
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: 60px; /* 120% */
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 100%;
    flex: 1;
    .line {
      width: 1330px;
      height: 2px;
      background: #fff;
    }
    .bottomTxT {
      margin-top: 10px;
      margin-bottom: 5px;
      color: #fff;
      text-align: center;
      font-family: "Public Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }
  }
`;
