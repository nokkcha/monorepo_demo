export const sorting = <T>(list: T[]) => {
  list.sort((a: T, b: T) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};
