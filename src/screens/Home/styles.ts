import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 
    colors.background },
  content: 
  { paddingHorizontal: 20, 
    paddingBottom: 32, 
    gap: 14 
  },
  title: { 
    color: colors.text.primary, 
    fontFamily: fontFamily.bold, 
    fontSize: textSize.screenTitle 
  },
  subtitle: { 
    color: colors.text.secondary, 
    fontFamily: fontFamily.regular, 
    fontSize: textSize.body, marginTop: 2 
  },
  row: { 
    flexDirection: "row", 
    gap: 12 
  },
  sectionHeader: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginTop: 8 
  },
  section: { 
    color: colors.text.primary, 
    fontFamily: fontFamily.semibold, 
    fontSize: textSize.section, 
    marginTop: 8 
  },
  link: { 
    color: colors.primary, 
    fontFamily: fontFamily.semibold, 
    fontSize: textSize.small 
  },
});
