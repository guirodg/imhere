import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: Props) {
  return (
    <View className={styles.container}>
      <Text className={styles.name}>{name}</Text>

      <TouchableOpacity className={styles.button} onPress={onRemove}>
        <Text className={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
