import { ZIP_CODE_LENGTH } from '@/constants/schema';

export const formatWithHyphens = (str: string): string => {
  const stringLen = str.length;

  if (stringLen === ZIP_CODE_LENGTH) {
    return `${str.slice(0, 3)}-${str.slice(3, stringLen)}`;
  }
  return `${str.slice(0, 3)}-${str.slice(3, 7)}-${str.slice(7, stringLen)}`;
};
