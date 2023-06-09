import React from "react";

import * as S from "./styles";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextFieldProps> = (props) => {
  return <S.Field {...props} />;
};

export default TextField;
