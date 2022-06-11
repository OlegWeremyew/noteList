import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const NodeListContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 10px;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  border: 2px solid ${({ theme }: ThemeType) => theme.border};
`;
export const InnerNodeContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const NodeFormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
