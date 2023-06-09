import { useTheme, DefaultTheme } from "styled-components";
import ReactSelect, { Props as SelectProps, StylesConfig } from "react-select";

export default function Select({ options, ...rest }: SelectProps) {
  const theme = useTheme() as DefaultTheme;

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme.colors.gray500,
      border: `1px solid ${theme.colors.gray700}`,
      height: 56,
      ":hover": {
        border: `1px solid ${theme.colors.gray700}`,
      },
      boxShadow: "none",
      fontSize: 16,
      fontFamily: "Inter, sans-serif",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: theme.colors.gray500,
      fontFamily: "Inter, sans-serif",
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: theme.colors.gray500,
        fontFamily: "Inter, sans-serif",
        fontSize: 14,
      };
    },
    input: (styles) => ({ ...styles, color: theme.colors.gray200 }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({ ...styles, color: theme.colors.gray200 }),
  };

  return <ReactSelect styles={colourStyles} options={options} {...rest} />;
}
