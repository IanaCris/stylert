import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 72px;
  padding: 14px;
  margin: 24px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['neutral-200']};
`;

const fontVariant = css`
  font-family: ${({ theme }) => theme.fonts.label};
  font-size: 24px;
  color: ${({ theme }) => theme.colors['neutral-700']};
`;

export const Labeliana = styled.View`
  //${fontVariant};
`;

export const Description = styled.View`
  ${fontVariant};
`;
