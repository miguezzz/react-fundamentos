import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.headerBgColor};
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;
  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    display: inline-block;

    & + a { // todo link que tiver um link antes dele
      margin-left: 16px;
    }
  } 
`;
