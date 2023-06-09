import styled from "styled-components";

export const Header = styled.header`
  height: 200px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray700};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;

  max-height: 48px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 56px;
`;
