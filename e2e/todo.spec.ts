import { test, expect } from "@playwright/test";

test.describe("Todoページのテスト", () => {
  // 各テストの前にページをナビゲート
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/todo");
  });

  test("初期表示", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toHaveText("Todo");
  });

  test("タスクの表示", async ({ page }) => {
    const todoList = page.locator("ul");
    await expect(todoList.locator("li", { hasText: "Learn Next.js" })).toBeVisible();
    await expect(todoList.locator("li", { hasText: "Build a todo app" })).toBe
  });

  test("タスクの追加", async ({ page }) => {
    const addButton = page.locator("button", { hasText: "Add Todo" });
    await addButton.click();

    const modal = page.locator(".modal");
    await expect(modal).toBeVisible();

    const input = page.locator("input");
    await input.fill("New Task");

    const submitButton = page.locator(".modal button", { hasText: "Add" });
    await submitButton.click();

    await expect(modal).not.toBeVisible();

    const todoList = page.locator("ul");
    const newTask = todoList.locator("li", { hasText: "New Task" }).first();
    
    await expect(newTask).toBeVisible();
  });
});
