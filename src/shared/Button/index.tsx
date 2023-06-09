import React, { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <S.Container {...props}>
      {text}
    </S.Container>
  );
};

export default Button;
