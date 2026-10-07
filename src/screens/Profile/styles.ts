import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

const card = { backgroundColor: colors.white, borderRadius: 12, padding: 16, overflow: "hidden" } as const;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 20, paddingBottom: 32, gap: 14 },
  photoWrap: { alignSelf: "center", marginTop: 12 },
  photo: { width: 128, height: 128, borderRadius: 64, backgroundColor: colors.primary, borderWidth: 4, borderColor: colors.white, alignItems: "center", justifyContent: "center" },
  camera: { position: "absolute", right: 0, bottom: 4, width: 32, height: 32, borderRadius: 16, backgroundColor: colors.white, alignItems: "center", justifyContent: "center" },
  center: { alignItems: "center", gap: 4 },
  name: { color: colors.text.primary, fontFamily: fontFamily.bold, fontSize: 24 },
  course: { color: colors.text.secondary, fontFamily: fontFamily.regular, fontSize: textSize.body },
  semester: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: colors.muted, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 999, marginTop: 4 },
  semesterText: { color: colors.text.secondary, fontFamily: fontFamily.semibold, fontSize: textSize.small },
  settings: { height: 48, borderRadius: 6, backgroundColor: colors.primary, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, marginVertical: 8 },
  settingsText: { color: colors.white, fontFamily: fontFamily.semibold, fontSize: 15 },
  wide: { ...card, flexDirection: "row", alignItems: "center", gap: 14 },
  wideIcon: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.blue, alignItems: "center", justifyContent: "center" },
  circle: { position: "absolute", top: -50, right: -30, width: 120, height: 120, borderRadius: 60 },
  smallLabel: { color: colors.text.secondary, fontFamily: fontFamily.semibold, fontSize: 11 },
  bigNumber: { color: colors.text.primary, fontFamily: fontFamily.bold, fontSize: 28 },
  row: { flexDirection: "row", gap: 12 },
  stat: { ...card, flex: 1, gap: 4 },
  statIcon: { alignSelf: "flex-start", width: 36, height: 24, borderRadius: 12, alignItems: "center", justifyContent: "center", marginBottom: 6 },
  statLabel: { color: colors.text.secondary, fontFamily: fontFamily.regular, fontSize: textSize.small },
});
