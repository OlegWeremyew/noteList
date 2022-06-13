import styled from 'styled-components';

import { ThemeType } from '../../../../../types/themeType';

export const NodeFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background: ${({ theme }: ThemeType) => theme.background};
  border: 2px solid ${({ theme }: ThemeType) => theme.border};
  border-radius: 15px;
`;

export const Input = styled.input`
  color: ${({ theme }: ThemeType) => theme.color};
  height: 35px;
  width: 90%;
  padding-left: 5px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0 0 5px 0;
  border: ${({ theme }: ThemeType) => theme.border} 1px solid;
  background: ${({ theme }: ThemeType) => theme.input};

  &:disabled {
    cursor: not-allowed;
  }

  &:not([disabled]):focus {
    outline: none;
    border: ${({ theme }: ThemeType) => theme.color} 2px solid;
  }
`;

export const Label = styled.label`
  width: 90%;
  float: left;
  margin-bottom: 3px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }: ThemeType) => theme.border};
    text-decoration: underline;
  }
`;

export const Textarea = styled.textarea`
  color: ${({ theme }: ThemeType) => theme.color};
  height: 80px;
  width: 90%;
  padding-left: 5px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0 0 5px 0;
  border: ${({ theme }: ThemeType) => theme.border} 1px solid;
  background: ${({ theme }: ThemeType) => theme.input};
  resize: none;

  &:disabled {
    cursor: not-allowed;
  }

  &:not([disabled]):focus {
    outline: none;
    border: ${({ theme }: ThemeType) => theme.color} 2px solid;
  }
`;

export const NodeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 90%;
  background: ${({ theme }: ThemeType) => theme.hoverBgc};
  border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  margin: 7px 2px 2px 2px;
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
