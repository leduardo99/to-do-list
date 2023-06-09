import styled, { Colors } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 24px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLabel = styled.div<{ color: keyof Colors }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme, color }) => theme.colors[color]};
  }
`;

export const Counter = styled.div`
  width: 25px;
  height: 19px;

  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;

  background-color: ${({ theme }) => theme.colors.gray400};
`;

export const ListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 64px 24px;

  img {
    height: 56px;
    width: 56px;

    margin-bottom: 16px;
  }

  strong,
  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
