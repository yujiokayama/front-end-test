import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AsyncComponent from "@/components/molecules/AsyncComponent";

describe("AsyncComponent コンポーネントのテスト", () => {
  it("初期表示ではテキストはInitial text", () => {
    render(<AsyncComponent />);
    const text = screen.getByText("Initial text");

    expect(text).toBeInTheDocument();
  });

  it("ボタンをクリックすると非同期処理が実行する", async () => {
    render(<AsyncComponent />);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText("Updated text")).toBeInTheDocument();
      },
      { interval: 50, timeout: 3000 }
    );
  });
});
