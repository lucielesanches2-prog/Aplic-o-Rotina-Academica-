import { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Header } from "@/components/Header";
import { ActivityCard } from "@/components/ActivityCard";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

const FILTERS = ["Todas", "Pendentes", "Em andamento", "Concluídas"];
const icon = (n: "book-outline" | "calculator-outline" | "code-slash-outline") => (
  <Ionicons name={n} size={14} color={colors.text.secondary} />
);

const DATA = [
  { filter: "Pendentes", tag: { label: "Urgente", bg: colors.tint.red, fg: colors.red }, date: "Hoje, 23:59", dateColor: undefined, title: "Seminário de ética", subtitle: "Preparar slides e roteiro para a apresentação final da disciplina de Ética Profissional.", accent: colors.red, footer: { icon: icon("book-outline"), text: "Filosofia", action: "Ver detalhes", actionColor: colors.primary } },
  { filter: "Em andamento", tag: { label: "Próxima", bg: colors.orange, fg: colors.white }, date: "Amanhã, 10:00", dateColor: undefined, title: "Exercícios de probabilidade", subtitle: "Lista 4 - Distribuição Normal e Teorema do Limite Central. Entregar em PDF.", accent: colors.orange, footer: { icon: icon("calculator-outline"), text: "Estatística", action: "Ver detalhes", actionColor: colors.primary } },
  { filter: "Concluídas", tag: { label: "Concluída", bg: colors.tint.green, fg: colors.green }, date: "Ontem", dateColor: undefined, title: "Projeto mobile", subtitle: "Implementação da interface principal e integração com API REST.", accent: colors.green, footer: { icon: icon("code-slash-outline"), text: "Desenvolvimento App", action: "Entregue", actionColor: colors.green } },
];

export function Activities() {
  const [active, setActive] = useState("Todas");
  const list = active === "Todas" ? DATA : DATA.filter((d) => d.filter === active);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header />
        <View>
          <Text style={styles.title}>Atividades e Prazos</Text>
          <Text style={styles.subtitle}>Acompanhe suas entregas e mantenha sua rotina em dia.</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
          {FILTERS.map((f) => (
            <Pressable key={f} onPress={() => setActive(f)} style={[styles.chip, active === f && styles.chipActive]}>
              <Text style={[styles.chipText, active === f && styles.chipTextActive]}>{f}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {list.map((a) => (
          <ActivityCard key={a.title} {...a} onPress={() => router.push("/activity-details")} />
        ))}

        <Pressable style={styles.add} onPress={() => router.push("/new-activity")}>
          <View style={styles.addButton}>
            <Ionicons name="add" size={24} color={colors.white} />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
