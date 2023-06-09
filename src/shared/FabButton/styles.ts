import styled, { Colors } from "styled-components";

export const Container = styled.div<{ color: keyof Colors }>`
  position: absolute;
  bottom: 20px;
  right: 20px;

  height: 56px;
  width: 56px;

  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
