import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const variants = {
  primary_fill: {
    backgroundColor: {
      enabled: '#5F0080',
      hover: '#4F177A',
      disabled: '#D9D9D9',
    },
    borderColor: {
      enabled: '#5F0080',
      hover: '#4F177A',
      disabled: '#D9D9D9',
    },
  },
  primary_stroke: {
    backgroundColor: {
      enabled: '#FFFFFF',
      hover: '#FFFFFF',
      disabled: '#FFFFFF',
    },
    borderColor: {
      enabled: '#5F0080',
      hover: '#5F0080',
      disabled: '#D9D9D9',
    },
  },
  secondary_fill: {
    backgroundColor: {
      enabled: '#333333',
      hover: '#1A1A1A',
      disabled: '#D9D9D9',
    },
    borderColor: {
      enabled: '#333333',
      hover: '#1A1A1A',
      disabled: '#D9D9D9',
    },
  },
  secondary_stroke: {
    backgroundColor: {
      enabled: '#FFFFFF',
      hover: '#FFFFFF',
      disabled: '#FFFFFF',
    },
    borderColor: {
      enabled: '#D9D9D9',
      hover: '#D9D9D9',
      disabled: '#D9D9D9',
    },
  },
  tertiary_fill: {
    backgroundColor: {
      enabled: '#F5F5F5',
      hover: '#E2E2E2',
      disabled: '#F5F5F5',
    },
    borderColor: {
      enabled: '#333333',
      hover: '#333333',
      disabled: '#CCCCCC',
    },
  },
  tertiary_stroke: {
    backgroundColor: {
      enabled: '#FAF3FD',
      hover: '#F3E4FA',
      disabled: '#FAF3FD',
    },
    borderColor: {
      enabled: '#FAF3FD',
      hover: '#F3E4FA',
      disabled: '#FAF3FD',
    },
  },
  danger_fill: {
    backgroundColor: {
      enabled: '#F03F40',
      hover: '#DC2D2E',
      disabled: '#D9D9D9',
    },
    borderColor: {
      enabled: '#F03F40',
      hover: '#DC2D2E',
      disabled: '#D9D9D9',
    },
  },
  danger_stroke: {
    backgroundColor: {
      enabled: '#FFFFFF',
      hover: '#FFFFFF',
      disabled: '#FFFFFF',
    },
    borderColor: {
      enabled: '#F03F40',
      hover: '#F03F40',
      disabled: '#D9D9D9',
    },
  },
  orange_stroke: {
    backgroundColor: {
      enabled: '#FFF2EE',
      hover: '#F8E1DA',
      disabled: '#FFF2EE',
    },
    borderColor: {
      enabled: '#FFF2EE',
      hover: '#F8E1DA',
      disabled: '#FFF2EE',
    },
  },
};

type Variant = keyof typeof variants;

// @ts-ignore
const Button = styled.button<{ variant: Variant }>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;

  transition: all 250ms ease-out;
  border-color: ${({ variant }) => variants[variant].borderColor.enabled};
  background-color: ${({ variant }) => variants[variant].backgroundColor.enabled};

  &:hover {
    border-color: ${({ variant }) => variants[variant].borderColor.hover};
    background-color: ${({ variant }) => variants[variant].backgroundColor.hover};
  }

  &:disabled {
    border-color: ${({ variant }) => variants[variant].borderColor.disabled};
    background-color: ${({ variant }) => variants[variant].backgroundColor.disabled};
  }
`;

interface Props {
  variant: Variant;
  height: number;
  borderRadius: number;
  disabled?: boolean;
}

export const ButtonSample = ({ children, disabled, height, borderRadius, variant }: PropsWithChildren<Props>) => {
  return (
    <Button
      type="button"
      variant={variant}
      style={{
        height,
        borderRadius,
      }}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
