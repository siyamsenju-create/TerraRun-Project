import { StyleSheet, Text, View } from "react-native";

export function RunTrackingPlaceholder() {
  return (
    <View style={styles.panel}>
      <Text style={styles.label}>Run tracking</Text>
      <Text style={styles.metric}>0.00 km</Text>
      <View style={styles.row}>
        <View>
          <Text style={styles.subLabel}>Duration</Text>
          <Text style={styles.value}>00:00</Text>
        </View>
        <View>
          <Text style={styles.subLabel}>Pace</Text>
          <Text style={styles.value}>--</Text>
        </View>
        <View>
          <Text style={styles.subLabel}>GPS</Text>
          <Text style={styles.value}>Ready</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: "#ffffff",
    borderColor: "#d9dedb",
    borderRadius: 8,
    borderWidth: 1,
    padding: 20,
  },
  label: {
    color: "#2764b3",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  metric: {
    color: "#17211b",
    fontSize: 48,
    fontWeight: "800",
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    gap: 18,
    justifyContent: "space-between",
    marginTop: 18,
  },
  subLabel: {
    color: "#66756c",
    fontSize: 13,
  },
  value: {
    color: "#17211b",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 4,
  },
});

