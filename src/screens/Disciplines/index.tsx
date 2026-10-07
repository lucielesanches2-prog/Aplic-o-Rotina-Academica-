import { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "@/components/Header";
import { DisciplineCard } from "@/components/DisciplineCard";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

const pend = (n: number) => ({ label: n === 1 ? "1 Pendente" : `${n} Pendentes`, bg: colors.tint.red, fg: colors.red });
const ok = { label: "Em dia", bg: colors.tint.green, fg: colors.green };

const DATA = [
  { name: "Banco de Dados II", teacher: "Prof. Roberto Silva", schedule: "Seg / Qua - 10:00", room: "Laboratório 401", accent: colors.primary, badge: pend(2) },
  { name: "Probabilidade e Estatística", teacher: "Prof. Maria Costa", schedule: "Ter / Qui - 08:00", room: "Sala 205", accent: colors.primary, badge: pend(1) },
  { name: "Psicologia Aplicada", teacher: "Prof. Carlos Lima", schedule: "Sex - 14:00", room: "Auditório 112", accent: colors.green, badge: ok },
  { name: "Engenharia de Software", teacher: "Prof. Ana Santos", schedule: "Seg / Qua - 14:00", room: "Laboratório 3", accent: colors.primary, badge: pend(3) },
];

export function Disciplines() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const list = DATA.filter((d) => [d.name, d.teacher, d.room].some((t) => t.toLowerCase().includes(q)));

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header />
        <Text style={styles.title}>Minhas Disciplinas</Text>
        <View style={styles.search}>
          <Ionicons name="search" size={20} color={colors.text.secondary} />
          <TextInput
            style={styles.input}
            value={query}
            onChangeText={setQuery}
            placeholder="Buscar disciplina, professor ou sala..."
            placeholderTextColor={colors.text.secondary}
          />
        </View>
        {list.map((d) => (
          <DisciplineCard key={d.name} variant="detailed" {...d} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
