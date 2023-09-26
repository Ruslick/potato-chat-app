import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  ParOne,
  ParTwo,
  ParThree,
  ParFour
} from './typography.style';

interface TypographyProps {
  variant: string;
  children: React.ReactNode;
  weight?: string | number;
  fontStyle?: string;
}

export const Typography: React.FC<TypographyProps> = ({ fontStyle, weight, variant, children }) => {
  return variant === 'h1' ? (
    <HeadingOne $weight={weight} $fontStyle={fontStyle}>
      {children}
    </HeadingOne>
  ) : variant === 'h2' ? (
    <HeadingTwo $weight={weight} $fontStyle={fontStyle}>
      {children}
    </HeadingTwo>
  ) : variant === 'h3' ? (
    <HeadingThree $weight={weight} $fontStyle={fontStyle}>
      {children}
    </HeadingThree>
  ) : variant === 'p1' ? (
    <ParOne $weight={weight} $fontStyle={fontStyle}>
      {children}
    </ParOne>
  ) : variant === 'p2' ? (
    <ParTwo $weight={weight} $fontStyle={fontStyle}>
      {children}
    </ParTwo>
  ) : variant === 'p3' ? (
    <ParThree $weight={weight} $fontStyle={fontStyle}>
      {children}
    </ParThree>
  ) : variant === 'p4' ? (
    <ParFour $weight={weight} $fontStyle={fontStyle}>
      {children}
    </ParFour>
  ) : (
    ''
  );
};
