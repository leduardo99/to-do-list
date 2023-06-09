import React from "react";
import { IconType } from "react-icons";
import { Colors } from "styled-components";

import * as S from "./styles";

interface FabButtonProps {
  icon: IconType;
  color?: keyof Colors;
  onClick?: () => void;
}

const FabButton: React.FC<FabButtonProps> = ({
  icon: Icon,
  color = "purpleDark",
  onClick,
}) => {
  return (
    <S.Container role="button" color={color} onClick={onClick}>
      {<Icon size={24} />}
    </S.Container>
  );
};

export default FabButton;
