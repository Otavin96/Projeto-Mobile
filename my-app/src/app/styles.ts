import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#FFF",
    gap: 30,
  },

  title: {
    color: "#00000",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  formTask: {
    flex: 1,
    gap: 20,
  },

  listTask: {
    flex: 2,
    gap: 20,
  },

  task: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
