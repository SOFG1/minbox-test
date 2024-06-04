import styled from "styled-components";
import { Checkbox } from "../UI/Checkbox";

const StyledWrapper = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  gap: 29px;
  border-bottom: 1px solid #e9e9e9;
  padding: 0 13px;
`;

const StyledText = styled.p<{ checked: boolean }>`
  font-size: 20px;
  line-height: 1;
  ${({ checked }) =>
    checked &&
    `
    color: #dadada;
    text-decoration: line-through;
  `}
`;

export const TodoItemComponent = () => {

    
  return (
    <StyledWrapper>
      <Checkbox />
      <StyledText checked={false}>Тестовое задание</StyledText>
    </StyledWrapper>
  );
};
