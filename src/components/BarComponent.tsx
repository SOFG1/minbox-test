import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px 8px;
`;

const StyledText = styled.p`
  font-size: 12px;
  color: #7a7a7a;
`;

const StyledButton = styled.button`
  font-size: 12px;
  color: #7a7a7a;
  font-family: inherit;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const StyledTab = styled.button<{active: boolean}>`
  font-size: 12px;
  color: #7c7c7c;
  font-family: inherit;
  cursor: pointer;
  background-color: transparent;
  border-radius: 2px;
  border: 0;
  ${({active}) => active && "border: 1px solid #f6b9b9;"}
`;

export const BarComponent = () => {
  return (
    <StyledWrapper>
      <StyledText>2 items left</StyledText>
      <StyledBox>
        <StyledTab active={true}>All</StyledTab>
        <StyledTab active={false}>Active</StyledTab>
        <StyledTab active={false}>Completed</StyledTab>
      </StyledBox>
      <StyledButton>Clear completed</StyledButton>
    </StyledWrapper>
  );
};
