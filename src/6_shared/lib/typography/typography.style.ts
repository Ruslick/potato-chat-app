import styled from 'styled-components';

const regular = 400;
const bold = 700;

const normal = 'normal';
const italic = 'italic';

interface HeadingProps {
  $weight?: string | number;
  $fontStyle?: string;
}

const fontWeight = (props: { $weight?: string | number }) => {
  return props.$weight === 'bold' ? bold : regular;
};

const fontStyle = (props: { $fontStyle?: string | number }) => {
  return props.$fontStyle === 'italic' ? italic : normal;
};

export const HeadingOne = styled.h1<HeadingProps>`
  font-size: 70px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
`;

export const HeadingTwo = styled.h2<HeadingProps>`
  font-size: 35px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
`;

export const HeadingThree = styled.h3<HeadingProps>`
  font-size: 30px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
`;

export const ParOne = styled.p<HeadingProps>`
  font-size: 25px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
`;

export const ParTwo = styled.p<HeadingProps>`
  font-size: 20px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
`;

export const ParThree = styled.p<HeadingProps>`
  font-size: 16px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
`;

export const ParFour = styled.p<HeadingProps>`
  font-size: 15px;
  font-weight: ${(props) => fontWeight(props)};
  font-style: ${(props) => fontStyle(props)};
`;
