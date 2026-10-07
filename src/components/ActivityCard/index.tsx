import { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import { Badge } from "@/components/Badge";
import { styles } from "./styles";

type Props = {
  tag: { label: string; bg: string; fg: string };
  date: string;
  dateColor?: string;
  title: string;
  subtitle: string;
  accent?: string;
  footer?: { icon: ReactNode; text: string; action: string; actionColor: string };
  onPress?: () => void;
};

export function ActivityCard({ tag, date, dateColor, title, subtitle, accent, footer, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, accent ? { borderLeftWidth: 4, borderLeftColor: accent } : null]}
    >
      <View style={styles.top}>
        <Badge {...tag} />
        <Text style={[styles.date, dateColor ? { color: dateColor } : null]}>{date}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {footer && (
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            {footer.icon}
            <Text style={styles.footerText}>{footer.text}</Text>
          </View>
          <Text style={[styles.action, { color: footer.actionColor }]}>{footer.action}</Text>
        </View>
      )}
    </Pressable>
  );
}
