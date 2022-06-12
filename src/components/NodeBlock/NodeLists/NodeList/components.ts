import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const NodeListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const InnerNodeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0 0 0;
`;

export const NodeItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  border-radius: 7px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  border: 2px solid ${({ theme }: ThemeType) => theme.border};
`;

export const NodeItemBlock = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NodeTitle = styled.h1`
  margin-top: 15px;
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 26px;
  word-break: break-all;
`;

export const HelpfulBlock = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 18px;

  input {
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const NodeDescription = styled.div`
  margin-left: 15px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }: ThemeType) => theme.color};
  word-break: break-all;
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
