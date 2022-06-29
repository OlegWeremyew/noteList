import styled, { keyframes } from 'styled-components';

import { ThemeType } from 'types/themeType';

export const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  @media screen and (max-width: 520px) {
    width: 400px;
  }
  @media screen and (max-width: 420px) {
    width: 310px;
  }
`;

export const SettingsTitle = styled.h1`
  font-size: 28px;
  @media screen and (max-width: 520px) {
    font-size: 20px;
  }
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 55px;
  background: ${({ theme }: ThemeType) => theme.hoverBgc};
  border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  margin: 8px 2px 2px 12px;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }: ThemeType) => theme.color};
  border-radius: 5px;

  &:disabled {
    cursor: not-allowed;
  }

  &:not([disabled]):hover {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:not([disabled]):active {
    opacity: 0.8;
  }
`;
