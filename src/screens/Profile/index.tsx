import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Header } from "@/components/Header";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

export function Profile() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Header />

        <View style={styles.photoWrap}>
          <View style={styles.photo}>
            <Ionicons name="person" size={72} color={colors.white} />
          </View>
          <View style={styles.camera}>
            <Ionicons name="camera" size={16} color={colors.primary} />
          </View>
        </View>

        <View style={styles.center}>
          <Text style={styles.name}>Estudante Universitário</Text>
          <Text style={styles.course}>Sistemas de Informação</Text>
          <View style={styles.semester}>
            <MaterialCommunityIcons name="school" size={16} color={colors.primary} />
            <Text style={styles.semesterText}>2º/2026</Text>
          </View>
        </View>

        <Pressable style={styles.settings}>
          <Ionicons name="settings-outline" size={18} color={colors.white} />
          <Text style={styles.settingsText}>Configurações</Text>
        </Pressable>

        <View style={styles.wide}>
          <View style={[styles.circle, { backgroundColor: colors.tint.blue }]} />
          <View style={styles.wideIcon}>
            <Ionicons name="book" size={22} color={colors.white} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.smallLabel}>DISCIPLINAS ATIVAS</Text>
            <Text style={styles.bigNumber}>6</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.text.secondary} />
        </View>

        <View style={styles.row}>
          <View style={styles.stat}>
            <View style={[styles.statIcon, { backgroundColor: colors.tint.green }]}>
              <Ionicons name="checkmark-circle-outline" size={18} color={colors.green} />
            </View>
            <Text style={styles.bigNumber}>24</Text>
            <Text style={styles.statLabel}>Atividades Concluídas</Text>
          </View>
          <View style={styles.stat}>
            <View style={[styles.circle, { backgroundColor: colors.tint.orange }]} />
            <View style={[styles.statIcon, { backgroundColor: colors.tint.red }]}>
              <Ionicons name="alert-circle" size={18} color={colors.red} />
            </View>
            <Text style={[styles.bigNumber, { color: colors.red }]}>3</Text>
            <Text style={styles.statLabel}>Pendências Atuais</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
