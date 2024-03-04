const getLocalStorage = (name: string) => {
  const item = localStorage.getItem(name);
  if (!item) return '';
  return JSON.parse(item);
};

const setLocalStorage = (name: string, itemset: unknown) => {
  localStorage.setItem(name, JSON.stringify(itemset));
};

export { getLocalStorage, setLocalStorage };
