import styled from 'styled-components';
import { globalTheme } from '../global.theme';

const regular = 400;
const bold = 700;

const normal = 'normal';
const italic = 'italic';

const primaryFont = 'Roboto';
const secondryFont = 'Nautilus';

const regularMargin = '0 0 20px 0';

interface HeadingProps {
  $weight?: string | number;
  $fontStyle?: string;
  $fontFamily?: string;
  $fontColor?: string;
  $margin?: string;
  $textAlign?: string;
}

const fontWeight = (props: { $weight?: string | number }) => {
  return props.$weight === 'bold' ? bold : regular;
};

const fontStyle = (props: { $fontStyle?: string | number }) => {
  return props.$fontStyle === 'italic' ? italic : normal;
};

const fontFamily = (props: { $fontFamily?: string }) => {
  return props.$fontFamily === 'Nautilus' ? secondryFont : primaryFont;
};

export const HeadingOne = styled.h1<HeadingProps>`
  font-size: 70px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
  font-family: ${(props) => fontFamily(props)};
  color: ${(props) => props.$fontColor || globalTheme.colors.primary.darkOrange};
  margin: ${(props) => props.$margin || regularMargin};
  text-align: ${(props) => props.$textAlign};
`;

export const HeadingTwo = styled.h2<HeadingProps>`
  font-size: 35px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
  font-family: ${(props) => fontFamily(props)};
  color: ${(props) => props.$fontColor || globalTheme.colors.primary.darkOrange};
  text-align: ${(props) => props.$textAlign};
  margin: ${(props) => props.$margin || regularMargin};
`;

export const HeadingThree = styled.h3<HeadingProps>`
  font-size: 30px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
  font-family: ${(props) => fontFamily(props)};
  color: ${(props) => props.$fontColor || globalTheme.colors.primary.darkOrange};
  margin: ${(props) => props.$margin || regularMargin};
`;

export const ParOne = styled.p<HeadingProps>`
  font-size: 25px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
  font-family: ${(props) => fontFamily(props)};
  color: ${(props) => props.$fontColor};
  margin: ${(props) => props.$margin || regularMargin};
`;

export const ParTwo = styled.p<HeadingProps>`
  font-size: 20px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
  font-family: ${(props) => fontFamily(props)};
  color: ${(props) => props.$fontColor};
  margin: ${(props) => props.$margin || regularMargin};
`;

export const ParThree = styled.p<HeadingProps>`
  font-size: 16px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
  font-family: ${(props) => fontFamily(props)};
  color: ${(props) => props.$fontColor};
  margin: ${(props) => props.$margin || regularMargin};
`;

export const ParFour = styled.p<HeadingProps>`
  font-size: 15px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
  font-family: ${(props) => fontFamily(props)};
  color: ${(props) => props.$fontColor};
  margin: ${(props) => props.$margin || regularMargin};
`;

/* color -  darkOrange default,
font Family */
