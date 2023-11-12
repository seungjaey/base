import { vars } from '@base/vanilla-extract/index.css';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    transition: 'all 250ms ease-out',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },

  variants: {
    variant: {
      primary_fill: {
        borderColor: vars.color.$purple800,
        backgroundColor: vars.color.$purple800,
        '&:hover': {
          borderColor: vars.color.$purple50,
          backgroundColor: vars.color.$purple50,
        },
        '&:disabled': {
          borderColor: vars.color.$gray800,
          backgroundColor: vars.color.$gray800,
        },
      },
    },
    size: {
      sm: {
        // height: vars.spacing.$32,
        height: 32,
        padding: '6px 12px',
      },
      md: {
        // height: vars.spacing.$40,
        height: 40,
        padding: '10px 16px',
      },
      lg: {
        // height: vars.spacing.$48,
        height: 48,
        padding: '12px 16px',
      },
      xl: {
        // height: vars.spacing.$56,
        height: 56,
        padding: '12px 24px',
      },
    },
    shape: {
      square: {
        // borderRadius: vars.radius.$12,
        borderRadius: 12,
      },
      round: {
        // borderRadius: vars.radius.$28,
        borderRadius: 28,
      },
    },
  },
  defaultVariants: {
    variant: 'primary_fill',
    size: 'sm',
    shape: 'square',
  },
});
