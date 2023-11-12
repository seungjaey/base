import { createThemeContract, createTheme, styleVariants, globalStyle } from '@vanilla-extract/css';

import { Colors, Spacing, Radius } from '@base/tokens';

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

export const colorVariants = styleVariants({
  main: {
    primary: {
      color: vars.color.$gray800,
    },
    primaryContainer: {
      color: vars.color.$purple50,
    },
    secondary: {
      color: vars.color.$gray900,
    },
    secondaryContainer: {
      color: vars.color.$gray100,
    },
    tertiary: {
      color: vars.color.$orange900,
    },
    tertiaryContainer: {
      color: vars.color.$orange50,
    },
    danger: {
      color: vars.color.$red800,
    },
    dangerContainer: {
      color: vars.color.$red50,
    },
    complete: {
      color: vars.color.$green800,
    },
    completeContainer: {
      color: vars.color.$green50,
    },
  },
  text: {
    primary: {
      color: {
        color: vars.color.$gray900,
      },
    },
    secondary: {
      color: vars.color.$gray800,
    },
    tertiary: {
      color: vars.color.$gray700,
    },
    quaternary: {
      color: vars.color.$gray600,
    },
    disabled: {
      color: vars.color.$gray500,
    },
    inverse: {
      color: vars.color.$white,
    },
  },
  background: {
    background1: {
      backgroundColor: vars.color.$white,
    },
    background2: {
      backgroundColor: vars.color.$gray50,
    },
    background3: {
      backgroundColor: vars.color.$gray100,
    },
    background4: {
      backgroundColor: vars.color.$gray200,
    },
    background5: {
      backgroundColor: vars.color.$gray400,
    },
  },
  line: {
    line1: {
      backgroundColor: {
        backgroundColor: vars.color.$gray200,
      },
    },
    line2: {
      backgroundColor: {
        backgroundColor: vars.color.$gray400,
      },
    },
  },
  point: {
    point1: {
      backgroundColor: vars.color.$purple500,
    },
    point2: {
      backgroundColor: vars.color.$purple700,
    },
  },
});

// TODO: Global Style (reset, normalize, font)
globalStyle('body', {
  padding: 16,
});
