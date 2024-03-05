const getLocalStorage = (name: string) => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(name);
    if (!item) return '';
    return JSON.parse(item);
  }
};

const setLocalStorage = (name: string, itemSet: unknown) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(name, JSON.stringify(itemSet));
  }
};

const clearLocalStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
};

export { getLocalStorage, setLocalStorage, clearLocalStorage };
