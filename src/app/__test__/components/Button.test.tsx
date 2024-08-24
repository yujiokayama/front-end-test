import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "@/components/atoms/Button";

describe("Buttonコンポーネントのテスト", () => {
  it("正しいテキストでボタンをレンダリングする", () => {
    render(<Button label="ボタン" onClick={() => alert("クリック")} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("ボタン");
  });
});
