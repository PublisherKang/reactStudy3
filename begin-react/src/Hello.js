import React from "react";

function Hello({ name, navi, color, isPecial }) {
  return (
    <div style={color}>
      {isPecial ? <b>*</b> : null}
      안녕하세요. {name} {navi}
    </div>
  );
}

// 프롭스가 없을때
Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
