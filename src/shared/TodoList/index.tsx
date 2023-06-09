import React from "react";

import * as S from "./styles";
import Todo from "../Todo";

import { Todo as TodoProps } from "@/context/TodoContext";

const TodoList: React.FC<{ todos: TodoProps[] }> = ({ todos }) => {
  return (
    <S.List>
      {todos.map((todo) => (
        <S.Item key={todo.id}>
          <Todo
            id={todo.id}
            isDone={todo.isDone}
            createdAt={todo.createdAt}
            updatedAt={todo.updatedAt}
            title={todo.title}
            description={todo.description}
          />
        </S.Item>
      ))}
    </S.List>
  );
};

export default TodoList;
