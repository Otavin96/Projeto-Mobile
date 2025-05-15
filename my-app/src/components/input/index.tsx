import { TextInput, TextInputProps } from "react-native";
import { Styles } from "./styles";

export const Input = ({ ...rest }: TextInputProps) => {
  return <TextInput style={Styles.input} {...rest} />;
};
