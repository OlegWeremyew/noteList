import styled from 'styled-components';

import { ThemeType } from 'types/themeType';

export const NodeItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  margin: 10px 0;
  background: ${({ theme }: ThemeType) => theme.background};
  border: 1px solid ${({ theme }: ThemeType) => theme.border};
`;

export const DeleteNodeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 95%;
  background: ${({ theme }: ThemeType) => theme.hoverBgc};
  border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  margin: 7px 2px;
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
