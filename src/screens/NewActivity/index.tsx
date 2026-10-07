import { useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Header } from "@/components/Header";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

const PRIORITIES = ["Baixa", "Média", "Alta"];

export function NewActivity() {
  const [title, setTitle] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Média");
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Header back title="Minha Rotina" />
        <Text style={styles.title}>Nova Atividade</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Título da Atividade</Text>
          <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Ex: Lista de Exercícios 3" placeholderTextColor={colors.text.secondary} />

          <Text style={styles.label}>Disciplina</Text>
          <View style={styles.inputRow}>
            <TextInput style={styles.flex} value={discipline} onChangeText={setDiscipline} placeholder="Selecione uma disciplina" placeholderTextColor={colors.text.primary} />
            <Ionicons name="chevron-down" size={18} color={colors.text.primary} />
          </View>

          <Text style={styles.label}>Data de entrega</Text>
          <View style={styles.inputRow}>
            <TextInput style={styles.flex} value={date} onChangeText={setDate} placeholder="mm/dd/yyyy" placeholderTextColor={colors.text.primary} />
            <Ionicons name="calendar-outline" size={18} color={colors.text.primary} />
          </View>

          <Text style={styles.label}>Prioridade</Text>
          <View style={styles.priorities}>
            {PRIORITIES.map((p) => (
              <Pressable key={p} onPress={() => setPriority(p)} style={[styles.priority, priority === p && styles.priorityActive]}>
                <Text style={[styles.priorityText, priority === p && styles.priorityTextActive]}>{p}</Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.label}>Descrição (Opcional)</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            value={description}
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
            placeholder="Adicione detalhes, links ou observações importantes sobre esta atividade..."
            placeholderTextColor={colors.text.secondary}
          />

          <View style={styles.divider} />
          <Pressable style={styles.save} onPress={() => router.back()}>
            <Ionicons name="save" size={18} color={colors.white} />
            <Text style={styles.saveText}>Salvar atividade</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
