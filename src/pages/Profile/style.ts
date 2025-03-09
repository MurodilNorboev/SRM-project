import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 340px;
  height: 294px;
  flex-shrink: 0;
  border-radius: 26px;
  border: 1px solid var(--200, #cfcbea);
  background: #fff;
  box-shadow: 2px 2px 4px 0px rgba(174, 191, 237, 0.25);
  display: flex;
  flex-direction: column;
  padding: 6px;
  justify-content: space-between;
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  height: 106px;
  padding: 0px 20px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--300, #bfbae3);
`;

export const LeftItem = styled.div`
  border-radius: 999px;
  border: 4px solid #fff;
  margin-bottom: -23%;
  background: var(
    --600,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #2c2669
  );
  height: 90px;
  width: 90px;
`;

export const Text1 = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
`;

export const Text2 = styled.div`
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;

export const Text3 = styled.div`
  color: var(--600, #2c2669);
  text-align: right;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
`;

//  modal
export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 30px;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 99991;
`;

export const DemoPageContainer = styled.div`
  padding: 105px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  background: var(--100, #efeef8);

  .line {
    background: #6053b9;
    height: 1px;
    width: 100%;
  }

  .bottomCon {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    h5 {
      color: var(--500, #6053b9);
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      cursor: pointer;
    }
  }
`;

export const LeftFormCon = styled.div`
  max-width: 563px;
  max-height: 845px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 20px;
  background: var(--50, #fff);
  padding: 40px;

  h4 {
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
  }
`;

export const RightCon = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 30px;
  max-width: 563px;
  max-height: 845px;
  flex-shrink: 0;

  .text1 {
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
  }
  .text2 {
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
  .text3 {
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 150% */
  }
  .contact {
    display: flex;
    gap: 20px;
    align-items: center;

    .phoneimg {
      display: flex;
      width: 44px;
      height: 44px;
      padding: 10px 0px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 6px;
      background: var(--300, #bfbae3);
    }
    .phoneNumber {
      color: var(--500, #6053b9);
      font-family: "Public Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
    }
  }
`;
