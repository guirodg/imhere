import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome"
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) => prevState.filter((p) => p !== name)),
      },
      {
        text: "Não",
      },
    ]);
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          className={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text className={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text className={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
