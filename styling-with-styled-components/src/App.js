import React, { useState } from "react";
//import styled, { css } from "styled-components";

import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };

  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <ThemeProvider
      theme={{ palette: { blue: "#228be6", gray: "#495057", pink: "#f06595" } }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">Button</Button>
            <Button>Button</Button>
            <Button size="small">Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" size="large">
              Button
            </Button>
            <Button color="gray">Button</Button>
            <Button color="gray" size="small">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="pink" size="large">
              Button
            </Button>
            <Button color="pink">Button</Button>
            <Button color="pink" size="small">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button outline size="large">
              Button
            </Button>
            <Button outline color="gray">
              Button
            </Button>
            <Button color="pink" size="small" outline>
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button fullWidth>Button</Button>
            <Button color="gray" fullWidth>
              Button
            </Button>
            <Button color="pink" fullWidth onClick={onClick}>
              삭제
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
};

export default App;

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${(props) => props.color || "black"};
//   border-radius: 50%;
//   ${(props) =>
//     props.huge &&
//     css`
//       width: 10rem;
//       height: 10rem;
//     `}
// `;

// const App = () => {
//   return <Circle color="red" huge />;
// };

// export default App;
