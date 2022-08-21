import classNames from "classnames";
import React from "react";
import "./Button.scss";

const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
  // return <button className={["Button", size].join("")}>{children}</button>;
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest} // 나머지 props를 통해서 onClick onmouseover 등 여러 이벤트를 실행할 수 있다.
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
