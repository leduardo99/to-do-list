import styled from "styled-components";

export const Container = styled.button`
  border: none;
  width: 100%;
  background: ${({ theme }) => theme.colors.blueDark};

  height: 52px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  
  color: ${({ theme }) => theme.colors.gray100};
  outline: none;

  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
  }
`;
