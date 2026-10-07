import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, borderRadius: 12, borderLeftWidth: 4, padding: 20, gap: 6, overflow: "hidden" },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
  name: { flex: 1, color: colors.text.primary, fontFamily: fontFamily.semibold, fontSize: 18 },
  line: { flexDirection: "row", alignItems: "center", gap: 8 },
  lineText: { color: colors.text.secondary, fontFamily: fontFamily.regular, fontSize: 14 },
  divider: { height: 1, backgroundColor: colors.muted, marginVertical: 8 },
  boxes: { flexDirection: "row", justifyContent: "space-between", gap: 12 },
  box: { flexDirection: "row", alignItems: "center", gap: 8, flex: 1 },
  boxIcon: { width: 32, height: 32, borderRadius: 16, backgroundColor: colors.tint.blue, alignItems: "center", justifyContent: "center" },
  boxLabel: { color: colors.text.secondary, fontFamily: fontFamily.regular, fontSize: 11 },
  boxValue: { color: colors.text.primary, fontFamily: fontFamily.medium, fontSize: 13 },
});
