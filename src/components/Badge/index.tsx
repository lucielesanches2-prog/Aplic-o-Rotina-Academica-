import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = { label: string; bg: string; fg: string };

export function Badge({ label, bg, fg }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color: fg }]}>{label}</Text>
    </View>
  );
}
