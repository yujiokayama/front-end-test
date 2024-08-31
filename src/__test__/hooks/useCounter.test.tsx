import { renderHook, act } from "@testing-library/react";

import useCounter from "hooks/useCounter";

describe("useCounter", () => {
  it("インクリメントのテスト", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("デクリメントのテスト", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
