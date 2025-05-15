import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export const Button = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest} style={Styles.button}>
      <Text style={Styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
