"use client";

import Button from "components/atoms/Button";
import Form from "components/molecules/Form";
import AsyncComponent from "components/molecules/AsyncComponent";

export default function Ui() {
  return (
    <>
      <h1>UIテスト</h1>
      <Button label="ボタン" onClick={() => alert("クリック")} />
      <Form />
      <AsyncComponent />
    </>
  );
}
