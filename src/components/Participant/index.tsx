import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
};

export function Participant({ name }: Props) {
  return (
    <View className={styles.container}>
      <Text className={styles.name}>{name}</Text>

      <TouchableOpacity className={styles.button}>
        <Text className={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
