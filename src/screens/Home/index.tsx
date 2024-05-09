import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View className="bg-black flex-1 p-6">
      <Text className="text-white text-2xl font-normal mr-12">
        Nome do evento
      </Text>
      <Text className="text-slate-700 text-base">
        Sexta, 4 de Novembro de 2024.
      </Text>
    </View>
  );
}
