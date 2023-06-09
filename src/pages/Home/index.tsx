import React from "react";

import clipboard from "@/assets/clipboard.svg";

import TodoList from "@/shared/TodoList";

import { useTodo } from "@/context/TodoContext";

import * as S from "./styles";

const Home: React.FC = () => {
  const { todos, getTodos } = useTodo();

  const noContent = React.useMemo(() => !todos.length, [todos]);

  const todoCounter = React.useMemo(() => todos.length, [todos]);

  const todoDoneCounter = React.useMemo(
    () => todos.filter((todo) => todo.isDone).length,
    [todos]
  );

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderLabel color="blue">
          <span>Tarefas Criadas</span>

          <S.Counter>{todoCounter}</S.Counter>
        </S.HeaderLabel>

        <S.HeaderLabel color="purple">
          <span>Concluídas</span>

          <S.Counter>{todoDoneCounter}</S.Counter>
        </S.HeaderLabel>
      </S.Header>

      <S.ListContainer>
        {noContent && (
          <S.NoContent>
            <img src={clipboard} alt="clipboard icon" />

            <strong>Você ainda não tem tarefas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </S.NoContent>
        )}

        {!noContent && <TodoList todos={todos} />}
      </S.ListContainer>
    </S.Container>
  );
};

export default Home;
