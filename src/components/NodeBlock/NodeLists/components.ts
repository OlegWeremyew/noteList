import styled from 'styled-components';

import { ThemeType } from '../../../types/themeType';

export const NodeListsContainer = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const NodeListBlock = styled.div`
  width: 400px;
  margin: 15px 5px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  border: 2px solid ${({ theme }: ThemeType) => theme.border};
`;
