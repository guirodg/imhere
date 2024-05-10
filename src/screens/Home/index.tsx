import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Voce clicou aqui");
  }

  function handleParticipantRemove() {
    console.log("Voce clicou em remover o participant");
  }

  return (
    <View className={styles.container}>
      <Text className={styles.title}>Nome do evento</Text>
      <Text className={styles.description}>Sexta, 4 de Novembro de 2024.</Text>

      <View className={styles.form}>
        <TextInput
          className={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />

        <TouchableOpacity
          className={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text className={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Guilherme" onRemove={handleParticipantRemove} />
    </View>
  );
}
