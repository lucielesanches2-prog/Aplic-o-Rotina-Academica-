// Componentes básicos do React Native: caixa (View), texto (Text) e área rolável (ScrollView)
import { View, Text, ScrollView } from "react-native";
// Evita que o conteúdo fique embaixo do relógio/câmera do celular
import { SafeAreaView } from "react-native-safe-area-context";
// Usado para navegar entre telas
import { router } from "expo-router";
// Componentes reutilizáveis do projeto
import { Header } from "@/components/Header";
import { SummaryCard } from "@/components/SummaryCard";
import { ActivityCard } from "@/components/ActivityCard";
import { DisciplineCard } from "@/components/DisciplineCard";
// Cores padronizadas e estilos desta tela (arquivo styles.ts da mesma pasta)
import { colors } from "@/styles/colors";
import { styles } from "./styles";

// Tela inicial (aba "Início")
export function Home() {
  return (
    // edges={["top"]}: protege só o topo; a parte de baixo fica por conta da tab bar
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* ScrollView: permite rolar quando o conteúdo é maior que a tela */}
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Topo: avatar, "Minha Rotina" e sino */}
        <Header />

        {/* Saudação */}
        <View>
          <Text style={styles.title}>Olá, estudante!</Text>
          <Text style={styles.subtitle}>Organize sua rotina acadêmica!</Text>
        </View>

        {/* Linha 1: card de Pendências ocupando a largura toda */}
        <View style={styles.row}>
          <SummaryCard icon="clipboard-alert" color={colors.orange} tint={colors.tint.orange} value={3} title="Pendências" subtitle="Para esta semana" />
        </View>

        {/* Linha 2: Provas e Disciplinas lado a lado (cada um com flex: 1) */}
        <View style={styles.row}>
          <SummaryCard icon="help-box-multiple" color={colors.red} tint={colors.tint.orange} value={2} title="Provas" subtitle="Próximos 15 dias" />
          <SummaryCard icon="school" color={colors.primary} tint={colors.tint.blue} value={5} title="Disciplinas" subtitle="Ativas no semestre" />
        </View>

        {/* Título da seção + link "Ver todas" que leva para a aba Atividades */}
        <View style={styles.sectionHeader}>
          <Text style={styles.section}>Próximas atividades</Text>
          <Text style={styles.link} onPress={() => router.push("/activity")}>Ver todas</Text>
        </View>

        {/* Atividade urgente: data em laranja; ao tocar, abre os detalhes */}
        <ActivityCard
          tag={{ label: "Pendente", bg: colors.tint.red, fg: colors.orange }}
          date="Hoje, 23:59" dateColor={colors.orange}
          title="Trabalho Prático de SO" subtitle="Sistemas Operacionais"
          onPress={() => router.push("/activity-details")}
        />
        {/* Atividade com prazo maior: etiqueta e data em cor neutra */}
        <ActivityCard
          tag={{ label: "Em 3 dias", bg: colors.muted, fg: colors.text.secondary }}
          date="25 Out"
          title="Lista de Exercícios 4" subtitle="Cálculo Diferencial e Integral III"
          onPress={() => router.push("/activity-details")}
        />

        {/* Título da seção de disciplinas */}
        <Text style={styles.section}>Disciplinas do semestre</Text>

        {/* variant="summary": formato compacto; accent = cor da faixa lateral; rightIcon = ícone do canto */}
        <DisciplineCard variant="summary" accent={colors.primary} rightIcon="code-tags" name="Engenharia de Software" teacher="Prof. Carlos Almeida" schedule="Seg, Qua 08:00 - 10:00" room="Sala 302, Bloco C" />
        <DisciplineCard variant="summary" accent={colors.green} rightIcon="server" name="Banco de Dados" teacher="Profa. Marina Silva" schedule="Ter, Qui 10:00 - 12:00" room="Lab 4, Bloco B" />
      </ScrollView>
    </SafeAreaView>
  );
}