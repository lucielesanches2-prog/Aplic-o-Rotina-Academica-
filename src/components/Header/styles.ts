import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", gap: 10, height: 56 },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: colors.primary, alignItems: "center", justifyContent: "center" },
  title: { flex: 1, color: colors.primary, fontFamily: fontFamily.bold, fontSize: 20 },
  titleCenter: { textAlign: "center" },
});
