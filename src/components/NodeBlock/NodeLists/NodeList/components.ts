import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const NodeListContainer = styled.div`
  width: 300px;
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  border: 2px solid ${({ theme }: ThemeType) => theme.border};
`;
