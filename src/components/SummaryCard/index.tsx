
// Imports

import { ComponentProps } from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

// // Dados que cada card de resumo recebe da tela
type Props = {
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"]; // O tipo complicado faz o TypeScript aceitar só nomes que existem na biblioteca, avisando se você errar o nome.
  color: string; //cor do ícone e do número (laranja, vermelho, azul).
  tint: string; // cor clara do círculo decorativo no canto.
  value: number | string;
  title: string;
  subtitle: string;
};

// O componente

export function SummaryCard({ icon, color, tint, value, title, subtitle }: Props) {
  // Uma função que recebe as props (já "abertas" em variáveis) e devolve o desenho do card.
  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: tint }]} />
      <View style={styles.row}>
        <MaterialCommunityIcons name={icon} color={color} size={24} />
        <Text style={[styles.value, { color }]}>{value}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
