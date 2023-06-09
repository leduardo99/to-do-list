import React from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@/shared/TextField";
import Button from "@/shared/Button";
import Select from "@/shared/Select";
import { useTodo } from "@/context/TodoContext";

import * as S from "./styles";

const CreatePage: React.FC = () => {
  const { createTodo } = useTodo();
  const navigate = useNavigate();

  const [data, setData] = React.useState({
    title: "",
    description: "",
    priority: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  async function handleOnSubmit() {
    await createTodo(data);

    setData({
      title: "",
      description: "",
      priority: "",
    });

    navigate("/");
  }

  return (
    <S.Container>
      <S.Form>
        <TextField
          name="title"
          placeholder="Título"
          value={data.title}
          onChange={handleChange}
        />

        <Select
          onChange={(value) => setData({ ...data, priority: value as any })}
          value={data.priority}
          options={[
            { label: "Alta", value: 1 },
            { label: "Média", value: 2 },
            { label: "Baixa", value: 3 },
          ]}
          placeholder="Prioridade"
        />

        <textarea
          value={data.description}
          name="description"
          placeholder="Descrição"
          onChange={handleChange}
        />
      </S.Form>

      <Button text="Criar" type="button" onClick={handleOnSubmit} />
    </S.Container>
  );
};

export default CreatePage;
