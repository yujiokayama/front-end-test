import { ShoppingList, createShoppingList } from "@/utils/shop";

/**
 *  1. `addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース
 *  2. `removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース
 *  3. `removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース
 */

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = createShoppingList();
  });

  describe("addItemメソッド", () => {
    it("アイテムをリストに追加できる", () => {
      shoppingList.addItem("apple");
      expect(shoppingList.list).toEqual(["apple"]);
    });
  });

  describe("removeItemメソッド", () => {
    it("アイテムをリストから削除できる", () => {
      shoppingList.addItem("apple");
      shoppingList.addItem("banana");
      shoppingList.removeItem("apple");
      
      expect(shoppingList.list).toEqual(["banana"]);
    });

    it("存在しないアイテムの削除を試みたときにエラーをスローする", () => {
      expect(() => {
        shoppingList.removeItem("apple");
      }).toThrow("アイテム: apple は存在しません");
    });
  });
});
