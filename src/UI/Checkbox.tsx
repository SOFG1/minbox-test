import styled from "styled-components";
import checkedIcon from "../images/checked-icon.png";

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  height: 32px;
  width: 32px;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  cursor: pointer;
  ${({ checked }) => checked && "border-color: #78c1b0;"}
`;

export const Checkbox = () => {
  return (
    <StyledCheckbox checked={true}>
      <img src={checkedIcon} alt="" />
    </StyledCheckbox>
  );
};
