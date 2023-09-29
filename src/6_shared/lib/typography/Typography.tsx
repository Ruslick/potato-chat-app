import React from 'react';
import * as text from './typography.style';

interface TypographyProps {
  variant: keyof typeof variantComponents;
  children: React.ReactNode;
  weight?: string | number;
  fontStyle?: string;
}

const variantComponents = {
  h1: text.HeadingOne,
  h2: text.HeadingTwo,
  h3: text.HeadingThree,
  p1: text.ParOne,
  p2: text.ParTwo,
  p3: text.ParThree,
  p4: text.ParFour
};

export const Typography: React.FC<TypographyProps> = React.memo(
  ({ fontStyle, weight, variant, children }) => {
    const Component = variantComponents[variant] || 'span';

    return (
      <Component $weight={weight} $fontStyle={fontStyle}>
        {children}
      </Component>
    );
  }
);
