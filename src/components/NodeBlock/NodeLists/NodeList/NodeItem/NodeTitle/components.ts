import styled from 'styled-components';

import { ThemeType } from 'types/themeType';

export const NodeTitleContainer = styled.h1`
  width: 95%;
  word-break: break-all;
  margin-top: 15px;
  margin-bottom: 5px
  display: flex;
  justify-content: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 26px;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  color: ${({ theme }: ThemeType) => theme.color};
  height: 35px;
  width: 90%;
  padding-left: 5px;
  font-size: 18px;
  border-radius: 5px;
  margin: 15px 0 5px 0;
  border: ${({ theme }: ThemeType) => theme.border} 1px solid;
  background: ${({ theme }: ThemeType) => theme.input};

  &:not([disabled]):focus {
    outline: none;
    border: ${({ theme }: ThemeType) => theme.color} 2px solid;
  }
`;
