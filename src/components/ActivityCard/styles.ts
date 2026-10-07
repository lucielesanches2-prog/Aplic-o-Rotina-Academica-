import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, borderRadius: 12, padding: 16, gap: 6, overflow: "hidden" },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 4 },
  date: { color: colors.text.secondary, fontFamily: fontFamily.semibold, fontSize: 12 },
  title: { color: colors.text.primary, fontFamily: fontFamily.bold, fontSize: 18 },
  subtitle: { color: colors.text.secondary, fontFamily: fontFamily.regular, fontSize: 14 },
  footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderTopWidth: 1, borderTopColor: colors.muted, paddingTop: 10, marginTop: 6 },
  footerLeft: { flexDirection: "row", alignItems: "center", gap: 6 },
  footerText: { color: colors.text.secondary, fontFamily: fontFamily.regular, fontSize: 12 },
  action: { fontFamily: fontFamily.semibold, fontSize: 12 },
});
