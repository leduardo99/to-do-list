import api from "@/api";
import React from "react";

export type Todo = {
  id: number;
  title: string;
  description?: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface TodoContextData {
  todos: Todo[];
  createTodo(todo: Partial<Todo>): Promise<void>;
  updateTodo(): Promise<void>;
  deleteTodo(id: number): Promise<void>;
  getTodos(): Promise<void>;
  toggleTodo(id: number): Promise<void>;
}

const TodoContext = React.createContext({} as TodoContextData);

export const TodoProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const createTodo = React.useCallback(async (todo: Partial<Todo>) => {
    const { data } = await api.post<Todo>("todos", todo);

    setTodos((state) => [...state, data]);
  }, []);

  const updateTodo = async () => {
    // TODO
  };

  const toggleTodo = React.useCallback(async (id: number) => {
    await api.patch(`todos/${id}/done`);

    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }

        return todo;
      })
    );
  }, []);

  const deleteTodo = React.useCallback(async (id: number) => {
    await api.delete(`todos/${id}`);

    setTodos((state) => state.filter((todo) => todo.id !== id));
  }, []);

  const getTodos = React.useCallback(async () => {
    const { data } = await api.get<Todo[]>("todos");

    setTodos(data);
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, createTodo, updateTodo, deleteTodo, getTodos, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useTodo(): TodoContextData {
  const context = React.useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
}
