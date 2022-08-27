import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished"; //polished 라이브러리

const StyledButton = styled.button`
  display: flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, "#228be6")};
  }
  &:active {
    background: ${darken(0.1, "#228be6")};
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
