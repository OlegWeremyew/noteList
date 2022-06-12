import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const NodeListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 10px;
  justify-content: flex-start;
  align-items: center;
`;
export const InnerNodeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px 0 0 0;
`;

export const NodeFormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const NodeItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NodeTitle = styled.h1`
  margin-top: 15px;
  margin-bottom: 5px;
  width: 100%;
  align-items: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 26px;
`;

export const HelpfulBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 20px;
  cursor: pointer;
`;
