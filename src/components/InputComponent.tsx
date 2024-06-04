import styled from "styled-components";
import icon from "../images/arrow.png";
import { useState } from "react";

const StyledWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 29px;
  border-bottom: 1px solid #e9e9e9;
  padding: 0 13px;
  cursor: text;
`;

const StyledIcon = styled.img``;

const StyledInput = styled.input`
  flex-grow: 1;
  height: 68px;
  font-style: italic;
  font-size: 20px;
  line-height: 1;
  border: 0;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #e6e6e6;
  }
`;

interface IProps {
  onAddItem: (text: string) => void;
}

export const InputComponent = ({ onAddItem }: IProps) => {
  const [text, setText] = useState<string>("");

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text) {
      onAddItem(text);
      setText("");
    }
  };

  return (
    <StyledWrapper>
      <StyledIcon src={icon} />
      <StyledInput
        onKeyDown={handleEnterPress}
        placeholder="What needs to be done ?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </StyledWrapper>
  );
};
