import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const ListTitle = styled.h1`
  word-break: break-all;
  align-items: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 26px;
  margin-left: 15px;
`;
