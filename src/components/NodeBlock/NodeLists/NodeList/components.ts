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
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0 0 0;
`;

export const NodeItemContainer = styled.div`
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


