import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "@/components/molecules/Form";

describe("Form コンポーネントのテスト", () => {
  it("初期表示ではテキストは空欄", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("入力フォームに文字列を入力できる", async () => {
    render(<Form />);

    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
    const input = screen.getByPlaceholderText("Enter text");
    const button = screen.getByRole("button");
    
    await userEvent.type(input, "test");
    expect(screen.getByDisplayValue("test")).toBeInTheDocument();

    await userEvent.click(button);
    expect(alertSpy).toHaveBeenCalledWith("submitted: test");

    alertSpy.mockRestore();
  });
});
