import styled from "styled-components";
import { InputComponent } from "./components/InputComponent";
import { TodoItemComponent } from "./components/TodoItemComponent";
import { BarComponent } from "./components/BarComponent";

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

function App() {
  return (
    <StyledWrapper>
      <StyledTitle>todos</StyledTitle>
      <StyledList>
        <InputComponent />
        <TodoItemComponent />
        <TodoItemComponent />
        <TodoItemComponent />
        <TodoItemComponent />
        <BarComponent />
      </StyledList>
    </StyledWrapper>
  );
}

export default App;
