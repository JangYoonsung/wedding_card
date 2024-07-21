export const FONT_SIZE = {
  XS: 'xs',
  SM: 'sm',
  BASE: 'base',
  LG: 'lg',
  XL: 'xl',
  '2XL': '2xl',
  '3XL': '3xl',
} as const;

export const MATCHED_SIZE = {
  xs: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },
  sm: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  base: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  lg: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  xl: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
  '2xl': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  '3xl': {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },
} as const;
