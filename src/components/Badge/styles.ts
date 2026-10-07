import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999 },
  text: { fontFamily: fontFamily.semibold, fontSize: 12 },
});
