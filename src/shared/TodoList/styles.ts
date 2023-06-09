import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  padding: 0;

  width: 100%;
  max-height: 400px;
  overflow: auto;
`;

export const Item = styled.li`
  & + li {
    margin-top: 12px;
  }
`;
