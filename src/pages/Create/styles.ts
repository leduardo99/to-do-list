import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  button {
    margin-top: 16px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  grid-template-areas:
    "title priority"
    "textarea textarea";

  select {
    grid-area: priority;
    height: 56px;

    padding: 16px;
    font-size: 16px;

    color: ${({ theme }) => theme.colors.gray200};
    background-color: ${({ theme }) => theme.colors.gray500};
    border: 1px solid ${({ theme }) => theme.colors.gray700};
    border-radius: 8px;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray300};
    }

    option {
      color: ${({ theme }) => theme.colors.gray200};
    }
  }

  textarea {
    grid-area: textarea;
    resize: none;

    padding: 16px;
    font-size: 16px;

    background-color: ${({ theme }) => theme.colors.gray500};
    border: 1px solid ${({ theme }) => theme.colors.gray700};
    border-radius: 8px;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray300};
    }
  }
`;
