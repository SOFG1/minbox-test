import styled from "styled-components";
import { InputComponent } from "./components/InputComponent";
import { TodoItemComponent } from "./components/TodoItemComponent";
import { BarComponent } from "./components/BarComponent";
import { useCallback, useState } from "react";
import { ITodoItem, TabType } from "./types";

const StyledWrapper = styled.div`
  max-width: 610px;
  padding: 24px 20px;
`;

const StyledTitle = styled.h1`
  font-size: 76px;
  text-align: center;
  font-weight: 100;
  color: #e9d9d8;
  margin-bottom: 28px;
`;

const StyledList = styled.div`
  background-color: #fefefe;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.41);
`;

const getCurrentTabTodos = (list: ITodoItem[], tab: TabType): ITodoItem[] => {
  return list.filter((i) => {
    if (tab === "active" && i.completed) return false;
    if (tab === "completed" && !i.completed) return false;
    return true;
  });
};

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [tab, setTab] = useState<TabType>("all");
  const currentTabItems = getCurrentTabTodos(todos, tab);

  const handleAddItem = useCallback((text: string) => {
    setTodos((p) => [...p, { id: p.length + 1, text, completed: false }]);
  }, []);

  const handleChangeCompleted = useCallback((id: number) => {
    setTodos((p) => {
      return p.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            completed: !i.completed,
          };
        }
        return i;
      });
    });
  }, []);

  const handleClearCompleted = () => {
    setTodos((p) => p.filter((p) => !p.completed));
  };

  return (
    <StyledWrapper>
      <StyledTitle>todos</StyledTitle>
      <StyledList>
        <InputComponent onAddItem={handleAddItem} />
        {currentTabItems.map((i) => (
          <TodoItemComponent
            item={i}
            onChangeCompleted={handleChangeCompleted}
            key={i.id}
          />
        ))}
        <BarComponent
          todos={todos}
          tab={tab}
          onChangeTab={setTab}
          onClearCompleted={handleClearCompleted}
        />
      </StyledList>
    </StyledWrapper>
  );
}

export default App;
