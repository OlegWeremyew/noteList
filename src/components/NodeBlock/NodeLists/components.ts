import styled from 'styled-components';

import { ThemeType } from '../../../types/themeType';

export const NodeListsContainer = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
`;
export const NodeListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  margin: 15px 5px;
  border-radius: 10px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  border: 3px solid ${({ theme }: ThemeType) => theme.border};
`;
