import { ZIP_CODE_LENGTH } from '@/constants/schema';

export const formatWithHyphens = (str: string): string => {
  const stringLen = str.length;

  if (stringLen === ZIP_CODE_LENGTH && !/^\d{7}$/.test(str)) {
    return `${str.slice(0, 3)}-${str.slice(3, stringLen)}`;
  }

  if (!/^0\d{9,10}$/.test(str)) return str;
  return `${str.slice(0, 3)}-${str.slice(3, 7)}-${str.slice(7, stringLen)}`;
};
