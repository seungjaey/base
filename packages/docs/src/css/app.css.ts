import { globalStyle, createTheme, createThemeContract } from '@vanilla-extract/css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { Radius, Spacing, Colors } from '@base/tokens';

export const vars = createThemeContract({
  color: {
    ...Colors,
  },
  spacing: {
    ...Spacing,
  },
  radius: {
    ...Radius,
  },
});

export const themeClass = createTheme(vars, {
  color: {
    ...Colors,
  },
  spacing: {
    ...Spacing,
  },
  radius: {
    ...Radius,
  },
});

const transformTokenValueWithUnit = (tokens: unknown, unit: string) => {
  if (!tokens) {
    return null;
  }
  if (typeof tokens !== 'object') {
    return null;
  }
  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => {
      return [key, `${value}${unit}`];
    }),
  );
};

const SpacingWithUnit = transformTokenValueWithUnit(Spacing, 'px');

const spacingProperties = defineProperties({
  properties: {
    width: Spacing,
    height: Spacing,
    paddingTop: Spacing,
    paddingBottom: Spacing,
    paddingLeft: Spacing,
    paddingRight: Spacing,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

const roundProperties = defineProperties({
  properties: {
    borderRadius: Radius,
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: Colors,
    background: Colors,
    backgroundColor: Colors,
    borderColor: Colors,
    // etc.
  },
});

export const sprinkles = createSprinkles(colorProperties, spacingProperties, roundProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];

// Reset CSS
globalStyle('body', {
  padding: 8,
});

// 해당 요소에 매핑시키지 않아도 자동으로 바인딩 된다.
// 장점이자 단점으로 봐야할듯 (추후에 어디서 적용하고 있는지 파악하기 어려움)

export const button = recipe({
  base: {
    overflow: 'hidden',
    transition: 'all 150ms ease-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    cursor: 'pointer',
    color: vars.color.$white,
  },
  variants: {
    color: {
      primary: {},
      secondary: {},
      tertiary: {},
      danger: {},
    },
    type: {
      fill: {},
      stroke: {},
      tender: {},
    },
    size: {
      sm: sprinkles({
        height: '$32',
        paddingY: '$6',
        paddingX: '$12',
      }),
      md: sprinkles({
        height: '$40',
        paddingY: '$10',
        paddingX: '$16',
      }),
      lg: sprinkles({
        height: '$48',
        paddingY: '$12',
        paddingX: '$16',
      }),
      xl: sprinkles({
        height: '$56',
        paddingY: '$12',
        paddingX: '$24',
      }),
    },
    shape: {
      square: {},
      round: {},
    },
  },

  compoundVariants: [
    // primary
    {
      variants: {
        color: 'primary',
        type: 'fill',
      },
      style: [
        sprinkles({
          borderColor: '$purple800',
          backgroundColor: '$purple800',
        }),
        {
          ':hover': {
            borderColor: vars.color.$purple900,
            backgroundColor: vars.color.$purple900,
          },
          ':disabled': {
            borderColor: vars.color.$purple200,
            backgroundColor: vars.color.$purple200,
          },
        },
      ],
    },
    {
      variants: {
        color: 'primary',
        type: 'stroke',
      },
      style: [
        sprinkles({
          borderColor: '$purple800',
          backgroundColor: '$white',
        }),
        {
          ':hover': {
            borderColor: vars.color.$purple800,
            backgroundColor: vars.color.$purple50,
          },
          ':disabled': {
            borderColor: vars.color.$purple200,
            backgroundColor: vars.color.$white,
          },
        },
      ],
    },
    {
      variants: {
        color: 'primary',
        type: 'tender',
      },
      style: [
        sprinkles({
          borderColor: '$purple50',
          backgroundColor: '$purple50',
        }),
        {
          ':hover': {
            borderColor: vars.color.$purple100,
            backgroundColor: vars.color.$purple100,
          },
          ':disabled': {
            borderColor: vars.color.$purple50,
            backgroundColor: vars.color.$purple50,
          },
        },
      ],
    },
    // secondary
    {
      variants: {
        color: 'secondary',
        type: 'fill',
      },
      style: [
        sprinkles({
          borderColor: '$gray900',
          backgroundColor: '$gray900',
        }),
        {
          ':hover': {
            borderColor: vars.color.$white,
            backgroundColor: vars.color.$white,
          },
          ':disabled': {
            borderColor: vars.color.$gray400,
            backgroundColor: vars.color.$gray400,
          },
        },
      ],
    },
    {
      variants: {
        color: 'secondary',
        type: 'stroke',
      },
      style: [
        sprinkles({
          borderColor: '$gray400',
          backgroundColor: '$white',
        }),
        {
          ':hover': {
            borderColor: vars.color.$gray400,
            backgroundColor: vars.color.$gray100,
          },
          ':disabled': {
            borderColor: vars.color.$gray200,
            backgroundColor: vars.color.$white,
          },
        },
      ],
    },
    {
      variants: {
        color: 'secondary',
        type: 'tender',
      },
      style: [
        sprinkles({
          borderColor: '$gray200',
          backgroundColor: '$gray200',
        }),
        {
          ':hover': {
            borderColor: vars.color.$gray300,
            backgroundColor: vars.color.$gray300,
          },
          ':disabled': {
            borderColor: vars.color.$gray200,
            backgroundColor: vars.color.$gray200,
          },
        },
      ],
    },
    // tertiary
    {
      variants: {
        color: 'tertiary',
        type: 'fill',
      },
      style: [
        sprinkles({
          borderColor: '$orange800',
          backgroundColor: '$orange800',
        }),
        {
          ':hover': {
            borderColor: vars.color.$orange900,
            backgroundColor: vars.color.$orange900,
          },
          ':disabled': {
            borderColor: vars.color.$orange200,
            backgroundColor: vars.color.$orange200,
          },
        },
      ],
    },
    {
      variants: {
        color: 'tertiary',
        type: 'stroke',
      },
      style: [
        sprinkles({
          borderColor: '$orange800',
          backgroundColor: '$white',
        }),
        {
          ':hover': {
            borderColor: vars.color.$orange800,
            backgroundColor: vars.color.$orange50,
          },
          ':disabled': {
            borderColor: vars.color.$orange200,
            backgroundColor: vars.color.$white,
          },
        },
      ],
    },
    {
      variants: {
        color: 'tertiary',
        type: 'tender',
      },
      style: [
        sprinkles({
          borderColor: '$orange50',
          backgroundColor: '$orange50',
        }),
        {
          ':hover': {
            borderColor: vars.color.$orange100,
            backgroundColor: vars.color.$orange100,
          },
          ':disabled': {
            borderColor: vars.color.$orange50,
            backgroundColor: vars.color.$orange50,
          },
        },
      ],
    },
    // danger
    {
      variants: {
        color: 'danger',
        type: 'fill',
      },
      style: [
        sprinkles({
          borderColor: '$red800',
          backgroundColor: '$red800',
        }),
        {
          ':hover': {
            borderColor: vars.color.$red900,
            backgroundColor: vars.color.$red900,
          },
          ':disabled': {
            borderColor: vars.color.$red200,
            backgroundColor: vars.color.$red200,
          },
        },
      ],
    },
    {
      variants: {
        color: 'danger',
        type: 'stroke',
      },
      style: [
        sprinkles({
          borderColor: '$red800',
          backgroundColor: '$white',
        }),
        {
          ':hover': {
            borderColor: vars.color.$red800,
            backgroundColor: vars.color.$red50,
          },
          ':disabled': {
            borderColor: vars.color.$red200,
            backgroundColor: vars.color.$white,
          },
        },
      ],
    },
    {
      variants: {
        color: 'danger',
        type: 'tender',
      },
      style: [
        sprinkles({
          borderColor: '$red50',
          backgroundColor: '$red50',
        }),
        {
          ':hover': {
            borderColor: vars.color.$red100,
            backgroundColor: vars.color.$red100,
          },
          ':disabled': {
            borderColor: vars.color.$red50,
            backgroundColor: vars.color.$red50,
          },
        },
      ],
    },

    // size + square
    {
      variants: {
        size: 'sm',
        shape: 'square',
      },
      style: sprinkles({
        borderRadius: '$6',
      }),
    },
    {
      variants: {
        size: 'md',
        shape: 'square',
      },
      style: sprinkles({
        borderRadius: '$8',
      }),
    },
    {
      variants: {
        size: 'lg',
        shape: 'square',
      },
      style: sprinkles({
        borderRadius: '$10',
      }),
    },
    {
      variants: {
        size: 'xl',
        shape: 'square',
      },
      style: sprinkles({
        borderRadius: '$12',
      }),
    },

    // size + round
    {
      variants: {
        size: 'sm',
        shape: 'round',
      },
      style: sprinkles({
        borderRadius: '$16',
      }),
    },
    {
      variants: {
        size: 'md',
        shape: 'round',
      },
      style: sprinkles({
        borderRadius: '$20',
      }),
    },
    {
      variants: {
        size: 'lg',
        shape: 'round',
      },
      style: sprinkles({
        borderRadius: '$24',
      }),
    },
    {
      variants: {
        size: 'xl',
        shape: 'round',
      },
      style: sprinkles({
        borderRadius: '$28',
      }),
    },
  ],

  defaultVariants: {
    color: 'primary',
    type: 'fill',
    size: 'sm',
    shape: 'square',
  },
});

// Get the type
export type ButtonVariants = RecipeVariants<typeof button>;
