import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;
  opacity: ${(props) => (props.removed ? 0.5 : 1)};
  color: ${(props) => (props.removed ? '#f00' : '#fff')};

  ${(props) => css`
    opacity: ${props.removed ? 0.5 : 1};
    color: ${props.removed ? '#f00' : '#fff'};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Likes = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;
