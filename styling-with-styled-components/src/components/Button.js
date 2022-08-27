import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished"; //polished 라이브러리

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:hover {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  display: inline-flex;
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
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const Button = ({ children, color, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "blue",
};

export default Button;
