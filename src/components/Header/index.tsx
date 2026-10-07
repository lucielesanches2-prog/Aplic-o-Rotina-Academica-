import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

type Props = { back?: boolean; title?: string; right?: "bell" | "more" };

export function Header({ back, title, right = "bell" }: Props) {
  return (
    <View style={styles.container}>
      {back ? (
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Ionicons name="arrow-back" size={24} color={colors.text.primary} />
        </Pressable>
      ) : (
        <View style={styles.avatar}>
          <Ionicons name="person" size={20} color={colors.white} />
        </View>
      )}
      <Text style={[styles.title, back && styles.titleCenter]}>{title ?? "Minha Rotina"}</Text>
      <Ionicons
        name={right === "bell" ? "notifications-outline" : "ellipsis-vertical"}
        size={22}
        color={right === "bell" ? colors.primary : colors.text.primary}
      />
    </View>
  );
}
