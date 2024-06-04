import styled from "styled-components"
import icon from "../images/arrow.png"

const StyledWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 29px;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 13px;
    cursor: text;
`

const StyledIcon = styled.img`
    
`

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

`

export const InputComponent = () => {
    return <StyledWrapper>
        <StyledIcon src={icon} />
        <StyledInput placeholder="What needs to be done ?" />
    </StyledWrapper>
}