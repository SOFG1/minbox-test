import styled from "styled-components";
import { ITodoItem, TabType } from "../types";

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

const StyledTab = styled.button<{ selected: boolean }>`
  font-size: 12px;
  color: #7c7c7c;
  font-family: inherit;
  cursor: pointer;
  background-color: transparent;
  border-radius: 2px;
  border: 0;
  ${({ selected }) => selected && "border: 1px solid #f6b9b9;"}
`;

interface IProps {
  todos: ITodoItem[];
  tab: TabType;
  onChangeTab: (tab: TabType) => void;
  onClearCompleted: () => void;
}

export const BarComponent = ({
  todos,
  tab,
  onChangeTab,
  onClearCompleted,
}: IProps) => {
  const itemsLeftCount = todos.filter((t) => !t.completed).length;

  return (
    <StyledWrapper>
      <StyledText>{itemsLeftCount} items left</StyledText>
      <StyledBox>
        <StyledTab selected={tab === "all"} onClick={() => onChangeTab("all")}>
          All
        </StyledTab>
        <StyledTab
          selected={tab === "active"}
          onClick={() => onChangeTab("active")}
        >
          Active
        </StyledTab>
        <StyledTab
          selected={tab === "completed"}
          onClick={() => onChangeTab("completed")}
        >
          Completed
        </StyledTab>
      </StyledBox>
      <StyledButton onClick={onClearCompleted}>Clear completed</StyledButton>
    </StyledWrapper>
  );
};
