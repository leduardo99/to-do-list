import React, { PropsWithChildren } from "react";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import FabButton from "@/shared/FabButton";

import logo from "@/assets/logo.svg";

import * as S from "./styles";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        <S.Logo src={logo} alt="logo" />
      </S.Header>

      <S.Container className="container">{children}</S.Container>

      <FabButton
        color="purpleDark"
        icon={MdAdd}
        onClick={() => navigate("/create")}
      />
    </>
  );
};

export default MainLayout;
