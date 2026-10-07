import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

 // Barra de Navegação das telas
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarLabelStyle: { fontFamily: fontFamily.medium, fontSize: 11 },
        tabBarStyle: { backgroundColor: colors.white, borderTopColor: colors.muted },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="discipline"
        options={{
          title: "Disciplinas",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "book" : "book-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Atividades",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "clipboard" : "clipboard-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}