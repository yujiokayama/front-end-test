export type ShoppingList = {
  list: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
};

const createShoppingList = (): ShoppingList => {
  const list: string[] = [];

  const addItem = (item: string): void => {
    list.push(item);
  };

  const removeItem = (item: string): void => {
    const index = list.indexOf(item);
    if (index === -1) {
      throw new Error(`アイテム: ${item} は存在しません`);
    }

    list.splice(index, 1);
  };

  return {
    list,
    addItem,
    removeItem,
  };
};

export { createShoppingList };
