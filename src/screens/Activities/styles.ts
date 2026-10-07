import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 20, paddingBottom: 32, gap: 14 },
  title: { color: colors.text.primary, fontFamily: fontFamily.bold, fontSize: textSize.screenTitle },
  subtitle: { color: colors.text.secondary, fontFamily: fontFamily.regular, fontSize: textSize.body, marginTop: 4 },
  chips: { gap: 10, paddingVertical: 4 },
  chip: { paddingHorizontal: 16, height: 36, borderRadius: 999, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.white, alignItems: "center", justifyContent: "center" },
  chipActive: { backgroundColor: colors.blue, borderColor: colors.blue },
  chipText: { color: colors.text.secondary, fontFamily: fontFamily.medium, fontSize: textSize.small },
  chipTextActive: { color: colors.white },
  add: { height: 120, borderRadius: 12, borderWidth: 2, borderStyle: "dashed", borderColor: colors.border, alignItems: "center", justifyContent: "center" },
  addButton: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.blue, alignItems: "center", justifyContent: "center" },
});
