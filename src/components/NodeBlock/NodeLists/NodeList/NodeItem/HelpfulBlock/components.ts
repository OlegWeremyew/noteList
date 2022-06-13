import styled from 'styled-components';

import { ThemeType } from '../../../../../../types/themeType';

export const HelpfulBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  margin-top: 10px;
  align-items: center;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 18px;

  label:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${({ theme }: ThemeType) => theme.border};
  }

  input {
    &:disabled {
      cursor: not-allowed;
    }
  }
`;
