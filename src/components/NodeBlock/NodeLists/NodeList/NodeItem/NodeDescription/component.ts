import styled from 'styled-components';

import { ThemeType } from '../../../../../../types/themeType';

export const NodeDescriptionContainer = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  width: 92%;
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }: ThemeType) => theme.color};
  word-break: break-all;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Textarea = styled.textarea`
  color: ${({ theme }: ThemeType) => theme.color};
  min-height: 35px;
  width: 95%;
  padding-left: 5px;
  font-size: 18px;
  border-radius: 5px;
  margin: 5px 0 5px 0;
  border: ${({ theme }: ThemeType) => theme.border} 1px solid;
  background: ${({ theme }: ThemeType) => theme.input};
  resize: none;

  &:not([disabled]):focus {
    outline: none;
    border: ${({ theme }: ThemeType) => theme.color} 2px solid;
  }
`;
