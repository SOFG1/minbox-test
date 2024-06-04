import styled from "styled-components";
import checkedIcon from "../images/checked-icon.png";
import { ITodoItem } from "../types";
import { memo } from "react";

const StyledWrapper = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  gap: 29px;
  border-bottom: 1px solid #e9e9e9;
  padding: 0 13px;
  cursor: pointer;
`;

const StyledCheckbox = styled.div<{ $completed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  height: 32px;
  width: 32px;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  ${({ $completed }) => $completed && "border-color: #78c1b0;"}
`;

const StyledText = styled.p<{ $completed: boolean }>`
  font-size: 20px;
  line-height: 1;
  ${({ $completed }) =>
    $completed &&
    `
    color: #dadada;
    text-decoration: line-through;
  `}
`;

interface IProps {
  item: ITodoItem;
  onChangeCompleted: (id: number) => void;
}

export const TodoItemComponent = memo(({ item, onChangeCompleted }: IProps) => {
  return (
    <StyledWrapper onClick={() => onChangeCompleted(item.id)}>
      <StyledCheckbox $completed={item.completed}>
        <img src={checkedIcon} alt="" />
      </StyledCheckbox>
      <StyledText $completed={item.completed}>{item.text}</StyledText>
    </StyledWrapper>
  );
});
