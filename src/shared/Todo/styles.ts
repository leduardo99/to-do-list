import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  background-color: ${({ theme }) => theme.colors.gray500};

  width: 100%;
  border-radius: 8px;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  width: 100%;

  gap: 30px;
`;

export const Checkbox = styled.div`
  height: 28px;
  height: 28px;

  position: relative;

  input[type="checkbox"] {
    visibility: hidden;

    &:checked + label {
      background-color: ${({ theme }) => theme.colors.purpleDark};
      border-color: ${({ theme }) => theme.colors.purpleDark};

      &:after {
        opacity: 1;
      }
    }
  }

  label {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.blueDark};
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;

    &:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: "";
      height: 6px;
      left: 5px;
      opacity: 0;
      position: absolute;
      top: 7px;
      transform: rotate(-45deg);
      width: 12px;
    }
  }
`;

export const Content = styled.div`
  gap: 6px;
`;

export const Title = styled.h2<{ $isDone: boolean }>`
  color: ${({ theme }) => theme.colors.gray200};

  ${({ $isDone }) =>
    $isDone &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.gray300};
    `}
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;

  border-radius: 4px;
  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  svg path {
    fill: ${({ theme }) => theme.colors.gray300};
  }

  &:hover {
    svg path {
      fill: ${({ theme }) => theme.colors.danger};
    }
  }
`;
