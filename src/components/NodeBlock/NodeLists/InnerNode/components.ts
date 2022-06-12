import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const ListTitle = styled.h1`
  align-items: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 26px;
`;
