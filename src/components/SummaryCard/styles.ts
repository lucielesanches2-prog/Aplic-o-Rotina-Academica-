import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { Platform, StyleSheet } from "react-native";

// Define o visual do card.

export const styles = StyleSheet.create({
  container: { 
    flex: 1, // faz o card ocupar o espaço disponível
    backgroundColor: colors.white, 
    padding: 20, // espaço interno entre a borda e o conteúdo
    borderRadius: 12, // cantos arredondados. 
    overflow: "hidden" }, // corta tudo que passa da borda

  circle: { 
    position: "absolute", // tira o círculo do fluxo normal. Ele não empurra o texto e fica por cima, posicionado em relação ao card.
    top: -40, right: -40,  // valores negativos jogam o círculo para fora do card
    width: 120, 
    height: 120, 
    borderRadius: 60 },

  row: { // ícone e número lado a lado 
    flexDirection: "row", // por padrão o React Native empilha tudo na vertical. Aqui os filhos ficam na horizontal.
    alignItems: "center", //centraliza ícone e número na vertical.
    gap: 8 }, // 8 pixels de espaço entre eles.

  value: { // o número grande
    fontFamily: fontFamily.semibold, 
    fontSize: textSize.label, 
    marginTop: Platform.OS === "android" ? -3 : -1 },
    
  content: { paddingTop: 12 },

  title: { 
    color: colors.text.primary, 
    fontFamily: fontFamily.semibold, 
    fontSize: textSize.dashboard.title },

  subtitle: { 
    color: colors.text.secondary, 
    fontFamily: fontFamily.regular, 
    fontSize: textSize.dashboard.subtitle },
});
