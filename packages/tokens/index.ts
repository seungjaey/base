const $black = '#000000' as const;

const $white = '#FFFFFF' as const;

const gray = {
  $gray50: '#F7F9FB',
  $gray100: '#F2F5F8',
  $gray200: '#EBEFF3',
  $gray300: '#D9DFE6',
  $gray400: '#CDD5DC',
  $gray500: '#BCC4CC',
  $gray600: '#AAB3BC',
  $gray700: '#878F9A',
  $gray800: '#565E67',
  $gray900: '#222222',
} as const;

const purple = {
  $purple50: '#F5EEFC',
  $purple100: '#EDDFF9',
  $purple200: '#DFC8F5',
  $purple300: '#CEA8EF',
  $purple400: '#CB98FA',
  $purple500: '#BD76FF',
  $purple600: '#A561E1',
  $purple700: '#8D4CC4',
  $purple800: '#672091',
  $purple900: '#5F0080',
} as const;

const orange = {
  $orange50: '#FEF0EB',
  $orange100: '#FEE1D7',
  $orange200: '#FDD1C3',
  $orange300: '#FCBBA5',
  $orange400: '#FCAA8F',
  $orange500: '#FB9979',
  $orange600: '#FA8863',
  $orange700: '#FA764B',
  $orange800: '#F96737',
  $orange900: '#F95019',
} as const;

const red = {
  $red50: '#FEECEC',
  $red100: '#FCD9D9',
  $red200: '#FBC5C6',
  $red300: '#F8A9A9',
  $red400: '#F79394',
  $red500: '#F57E7F',
  $red600: '#F3696A',
  $red700: '#F25253',
  $red800: '#F03F40',
  $red900: '#E22D2E',
} as const;

const green = {
  $green50: '#E9F6F2',
  $green100: '#D3EDE5',
  $green200: '#BDE3D8',
  $green300: '#9CD6C4',
  $green400: '#84CBB6',
  $green500: '#6CC1A7',
  $green600: '#53B799',
  $green700: '#39AC89',
  $green800: '#23A37C',
  $green900: '#029568',
} as const;

const blue = {
  $blue50: '#E9F2FB',
  $blue100: '#D3E5F7',
  $blue200: '#BED8F3',
  $blue300: '#9DC4ED',
  $blue400: '#85B6E9',
  $blue500: '#6DA7E5',
  $blue600: '#5599E1',
  $blue700: '#3B89DC',
  $blue800: '#257CD8',
  $blue900: '#0566CD',
} as const;

const yellow = {
  $yellow50: '#FFF9E5',
  $yellow100: '#FFF2CC',
  $yellow200: '#FFECB3',
  $yellow300: '#FFE28C',
  $yellow400: '#FFDB70',
  $yellow500: '#FFD454',
  $yellow600: '#FFCD38',
  $yellow700: '#FFC51A',
  $yellow800: '#FFBF00',
  $yellow900: '#EDB200',
} as const;

export const Colors = {
  $black,
  $white,
  ...gray,
  ...purple,
  ...red,
  ...orange,
  ...green,
  ...blue,
  ...yellow,
} as const;

export const Spacing = {
  $2: '2px',
  $4: '4px',
  $6: '6px',
  $8: '8px',
  $10: '10px',
  $12: '12px',
  $16: '16px',
  $24: '24px',
  $32: '32px',
  $40: '40px',
  $48: '48px',

  // NOTE: 56 은 정의되지 않은 토큰 -> 디자인 팀 전달 필요
  $56: '56px',

  $64: '64px',
  $80: '80px',
  $96: '96px',
  $160: '160px',
};

export const Radius = {
  $4: '4px',
  $6: '6px',
  $8: '8px',
  $10: '10px',
  $12: '12px',
  $16: '16px',
  // NOTE: 20 은 정의되지 않은 토큰 -> 디자인 팀 전달 필요
  $20: '20px',
  $24: '24px',

  // NOTE: 28 은 정의되지 않은 토큰 -> 디자인 팀 전달 필요
  $28: '28px',
} as const;
