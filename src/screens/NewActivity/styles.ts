import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

const field = { borderWidth: 1, borderColor: colors.border, borderRadius: 4, paddingHorizontal: 12, backgroundColor: colors.white } as const;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 20, paddingBottom: 32, gap: 14 },
  title: { color: colors.text.primary, fontFamily: fontFamily.bold, fontSize: textSize.screenTitle },
  card: { backgroundColor: colors.white, borderRadius: 12, padding: 20, gap: 8 },
  label: { color: colors.text.secondary, fontFamily: fontFamily.semibold, fontSize: textSize.small, marginTop: 12 },
  input: { ...field, height: 44, color: colors.text.primary, fontFamily: fontFamily.regular, fontSize: textSize.body },
  inputRow: { ...field, height: 44, flexDirection: "row", alignItems: "center", gap: 8 },
  flex: { flex: 1, color: colors.text.primary, fontFamily: fontFamily.regular, fontSize: textSize.body },
  priorities: { flexDirection: "row", gap: 10 },
  priority: { flex: 1, height: 40, borderWidth: 1, borderColor: colors.border, borderRadius: 4, alignItems: "center", justifyContent: "center" },
  priorityActive: { borderColor: colors.orange, backgroundColor: colors.tint.orange },
  priorityText: { color: colors.text.secondary, fontFamily: fontFamily.medium, fontSize: textSize.body },
  priorityTextActive: { color: colors.orange },
  textarea: { height: 110, paddingTop: 12 },
  divider: { height: 1, backgroundColor: colors.muted, marginTop: 20, marginBottom: 12 },
  save: { height: 48, borderRadius: 6, backgroundColor: colors.blue, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
  saveText: { color: colors.white, fontFamily: fontFamily.semibold, fontSize: 15 },
});
