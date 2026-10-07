import { View, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Badge } from "@/components/Badge";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

type Props = {
  variant: "summary" | "detailed";
  name: string;
  teacher: string;
  schedule: string;
  room: string;
  accent: string;
  badge?: { label: string; bg: string; fg: string };
  rightIcon?: "code-tags" | "server";
};

type IconName = "person-outline" | "time-outline" | "business-outline";

function Box({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return (
    <View style={styles.box}>
      <View style={styles.boxIcon}>
        <Ionicons name={icon} size={16} color={colors.primary} />
      </View>
      <View>
        <Text style={styles.boxLabel}>{label}</Text>
        <Text style={styles.boxValue}>{value}</Text>
      </View>
    </View>
  );
}

function Line({ icon, text }: { icon: IconName; text: string }) {
  return (
    <View style={styles.line}>
      <Ionicons name={icon} size={16} color={colors.text.secondary} />
      <Text style={styles.lineText}>{text}</Text>
    </View>
  );
}

export function DisciplineCard({ variant, name, teacher, schedule, room, accent, badge, rightIcon }: Props) {
  return (
    <View style={[styles.container, { borderLeftColor: accent }]}>
      <View style={styles.top}>
        <Text style={styles.name}>{name}</Text>
        {badge && <Badge {...badge} />}
        {rightIcon && <MaterialCommunityIcons name={rightIcon} size={22} color={colors.text.secondary} />}
      </View>
      {variant === "summary" ? (
        <View style={{ gap: 8, marginTop: 8 }}>
          <Line icon="person-outline" text={teacher} />
          <Line icon="time-outline" text={schedule} />
          <Line icon="business-outline" text={room} />
        </View>
      ) : (
        <>
          <Line icon="person-outline" text={teacher} />
          <View style={styles.divider} />
          <View style={styles.boxes}>
            <Box icon="time-outline" label="Horário" value={schedule} />
            <Box icon="business-outline" label="Sala" value={room} />
          </View>
        </>
      )}
    </View>
  );
}
