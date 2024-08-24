"use client";

import Button from "@/components/atoms/Button";

export default function UiTest() {
  return (
    <>
      <h1>UIテスト</h1>
      <Button label="ボタン" onClick={() => alert("クリック")} />
    </>
  );
}
