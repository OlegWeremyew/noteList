import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const InnerFormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Input = styled.input`
  color: ${({ theme }: ThemeType) => theme.color};
  height: 35px;
  width: 500px;
  padding-left: 5px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0;
  border: ${({ theme }: ThemeType) => theme.border} 2px solid;
  background: ${({ theme }: ThemeType) => theme.input};

  &:disabled {
    cursor: not-allowed;
  }

  &:not([disabled]):focus {
    outline: none;
    border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  }
`;

export const InnerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 140px;
  background: ${({ theme }: ThemeType) => theme.hoverBgc};
  border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  margin: 2px;
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
