import styled from 'styled-components';

import { ThemeType } from 'types/themeType';

export const ListTitle = styled.h1`
  word-break: break-all;
  align-items: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 26px;
  margin-left: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  color: ${({ theme }: ThemeType) => theme.color};
  height: 35px;
  width: 90%;
  padding-left: 5px;
  font-size: 18px;
  border-radius: 5px;
  margin: 5px 0 5px 0;
  border: ${({ theme }: ThemeType) => theme.border} 1px solid;
  background: ${({ theme }: ThemeType) => theme.input};

  &:not([disabled]):focus {
    outline: none;
    border: ${({ theme }: ThemeType) => theme.color} 2px solid;
  }
`;
