import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { RunTrackingPlaceholder } from "./src/modules/run-tracking/RunTrackingPlaceholder";

const sections = [
  { label: "Territory", value: "Map shell ready" },
  { label: "Battles", value: "Beta module pending" },
  { label: "Profile", value: "Dev Runner" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.brand}>TerraRun</Text>
          <Text style={styles.title}>Mobile MVP Shell</Text>
          <Text style={styles.copy}>
            Expo is scaffolded for the future GPS tracking slice. This foundation keeps the
            first build runnable without background location permissions.
          </Text>
        </View>

        <RunTrackingPlaceholder />

        <View style={styles.grid}>
          {sections.map((section) => (
            <View key={section.label} style={styles.card}>
              <Text style={styles.cardLabel}>{section.label}</Text>
              <Text style={styles.cardValue}>{section.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#f4f6f2",
    flex: 1,
  },
  container: {
    gap: 18,
    padding: 20,
  },
  header: {
    gap: 8,
    paddingVertical: 12,
  },
  brand: {
    color: "#1f8a5b",
    fontSize: 18,
    fontWeight: "800",
  },
  title: {
    color: "#17211b",
    fontSize: 36,
    fontWeight: "800",
  },
  copy: {
    color: "#66756c",
    fontSize: 16,
    lineHeight: 24,
  },
  grid: {
    gap: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#d9dedb",
    borderRadius: 8,
    borderWidth: 1,
    padding: 18,
  },
  cardLabel: {
    color: "#66756c",
    fontSize: 14,
  },
  cardValue: {
    color: "#17211b",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 6,
  },
});

