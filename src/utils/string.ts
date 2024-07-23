export const formatWithHyphens = (str: string): string => {
  const stringLen = str.length;

  if (stringLen === 7) {
    return `${str.slice(0, 3)}-${str.slice(3, stringLen)}`;
  }
  return `${str.slice(0, 3)}-${str.slice(3, 7)}-${str.slice(7, stringLen)}`;
};
