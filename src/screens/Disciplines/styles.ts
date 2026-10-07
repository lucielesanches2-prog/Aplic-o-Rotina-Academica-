import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 20, paddingBottom: 32, gap: 14 },
  title: { color: colors.text.primary, fontFamily: fontFamily.bold, fontSize: textSize.screenTitle },
  search: { flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: 4, paddingHorizontal: 12, height: 44 },
  input: { flex: 1, color: colors.text.primary, fontFamily: fontFamily.regular, fontSize: textSize.body },
});
