import styled from 'styled-components';

export const Field = styled.input`
  height: 54px;

  width: 100%;

  padding: 16px;
  font-size: 16px;

  background-color: ${({ theme }) => theme.colors.gray500};
  border: 1px solid ${({ theme }) => theme.colors.gray700};
  border-radius: 8px;

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
