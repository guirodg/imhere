import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant() {
  return (
    <View className={styles.container}>
      <Text className={styles.name}>Guizao</Text>

      <TouchableOpacity className={styles.button}>
        <Text className={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
