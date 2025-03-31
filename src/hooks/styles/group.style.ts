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
