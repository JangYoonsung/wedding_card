export const BORDER_COLOR = { PRIMARY: 'primary', ERROR: 'error' } as const;

export const COLOR = {
  ...BORDER_COLOR,
  SECONDARY: 'secondary',
  WHITE: 'white',
  BLACK: 'black',
} as const;

export const VARIANT = { TEXT: 'text', OUTLINE: 'outline', CONTAINED: 'contained' } as const;
