import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  width: 100%;
  max-width: 560px;
  background: #eaf2f2;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: 58px;
  letter-spacing: -0.30000001192092896px;
  font-family: Noto Sans SC;
`;
const Subtitle = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.3px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: rgba(117, 108, 108, 0.57);
`;

const Total = styled.p`
  display: flex;
  align-items: center;
  line-height: 35px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.3px;
  color: #000000;
  font-family: "Noto Sans SC";
`;
const AppInputs = styled.div`
  display: grid;
  grid-gap: 32px;
  width: 100%;
  max-width: 560px;
  margin-bottom: 32px;
`;

const StyledSelect = styled.select`
  width: 456px;
  height: 68px;
  left: 528px;
  top: 590px;
  border-radius: 30px;
  background: #ffffff;
`;
export { StyledForm, Title, Subtitle, Total, AppInputs, StyledSelect };
