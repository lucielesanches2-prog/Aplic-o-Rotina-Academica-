import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 20, paddingBottom: 24, gap: 14 },
  badges: { flexDirection: "row", gap: 8 },
  title: { color: colors.text.primary, fontFamily: fontFamily.bold, fontSize: textSize.screenTitle },
  row: { flexDirection: "row", gap: 12 },
  info: { flex: 1, backgroundColor: colors.white, borderRadius: 12, padding: 16, gap: 8 },
  infoLabel: { flexDirection: "row", alignItems: "center", gap: 6 },
  infoLabelText: { color: colors.text.secondary, fontFamily: fontFamily.semibold, fontSize: 11 },
  infoValue: { color: colors.text.primary, fontFamily: fontFamily.semibold, fontSize: 16 },
  tip: { flexDirection: "row", gap: 12, backgroundColor: colors.blue, borderRadius: 12, padding: 16 },
  tipTitle: { color: colors.white, fontFamily: fontFamily.bold, fontSize: 16 },
  tipText: { color: colors.white, fontFamily: fontFamily.regular, fontSize: textSize.small, marginTop: 2 },
  description: { backgroundColor: colors.white, borderRadius: 12, padding: 20, gap: 12 },
  descTitleRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  descTitle: { color: colors.text.primary, fontFamily: fontFamily.bold, fontSize: textSize.section },
  divider: { height: 1, backgroundColor: colors.muted },
  text: { color: colors.text.primary, fontFamily: fontFamily.regular, fontSize: textSize.body, lineHeight: 22 },
  topic: { marginLeft: 24, marginVertical: -4 },
  actions: { paddingHorizontal: 20, paddingTop: 12, gap: 10, borderTopWidth: 1, borderTopColor: colors.muted, backgroundColor: colors.background },
  done: { height: 48, borderRadius: 6, backgroundColor: colors.green, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
  doneText: { color: colors.white, fontFamily: fontFamily.semibold, fontSize: textSize.small },
  edit: { height: 44, borderRadius: 6, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.white, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
  editText: { color: colors.text.primary, fontFamily: fontFamily.semibold, fontSize: textSize.small },
});
