import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Header } from "@/components/Header";
import { Badge } from "@/components/Badge";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

const TOPICS = ["Introdução", "Desenvolvimento Teórico", "Metodologia Aplicada", "Considerações Finais", "Referências (Mínimo de 3 fontes acadêmicas)"];

export function ActivityDetails() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header back title="Detalhes" right="more" />

        <View style={styles.badges}>
          <Badge label="Pendente" bg={colors.muted} fg={colors.text.secondary} />
          <Badge label="Alta Prioridade" bg={colors.tint.red} fg={colors.red} />
        </View>
        <Text style={styles.title}>Elaboração do Artigo de Metodologia Científica</Text>

        <View style={styles.row}>
          <View style={styles.info}>
            <View style={styles.infoLabel}>
              <Ionicons name="book" size={14} color={colors.primary} />
              <Text style={styles.infoLabelText}>DISCIPLINA</Text>
            </View>
            <Text style={styles.infoValue}>Metodologia Científica</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.infoLabel}>
              <Ionicons name="calendar" size={14} color={colors.primary} />
              <Text style={styles.infoLabelText}>ENTREGA</Text>
            </View>
            <Text style={[styles.infoValue, { color: colors.red }]}>24 Out, 23:59</Text>
          </View>
        </View>

        <View style={styles.tip}>
          <MaterialCommunityIcons name="lightbulb-outline" size={22} color={colors.white} />
          <View style={{ flex: 1 }}>
            <Text style={styles.tipTitle}>Dica de Estudo</Text>
            <Text style={styles.tipText}>Comece esta atividade com antecedência para evitar atrasos na formatação ABNT.</Text>
          </View>
        </View>

        <View style={styles.description}>
          <View style={styles.descTitleRow}>
            <Ionicons name="reorder-three" size={22} color={colors.primary} />
            <Text style={styles.descTitle}>Descrição da Tarefa</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.text}>O artigo deve conter no mínimo 5 páginas e no máximo 10 páginas, abordando o tema escolhido na aula anterior.</Text>
          <Text style={styles.text}>É obrigatório o uso das normas ABNT atualizadas (margens, espaçamento, citações diretas e indiretas). A estrutura deve conter:</Text>
          {TOPICS.map((t) => (
            <Text key={t} style={[styles.text, styles.topic]}>{t}</Text>
          ))}
          <Text style={styles.text}>O envio deve ser feito exclusivamente em formato PDF através do portal do aluno.</Text>
        </View>
      </ScrollView>

      <View style={styles.actions}>
        <Pressable style={styles.done}>
          <Ionicons name="checkmark-circle" size={20} color={colors.white} />
          <Text style={styles.doneText}>MARCAR COMO CONCLUÍDA</Text>
        </Pressable>
        <Pressable style={styles.edit}>
          <Ionicons name="pencil" size={16} color={colors.text.primary} />
          <Text style={styles.editText}>EDITAR ATIVIDADE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
