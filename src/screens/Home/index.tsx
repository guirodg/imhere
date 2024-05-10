import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Guilherme",
    "Vini",
    "Joao",
    "Diego",
    "Biro",
    "Laura",
    "Jack",
    "Mayk",
    "Juvenal",
    "Alberto",
  ];

  function handleParticipantAdd() {
    console.log("Voce clicou aqui");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Voce clicou em remover o participant ${name}`);
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove("Guilherme")}
          />
        ))}
      </ScrollView>
    </View>
  );
}
