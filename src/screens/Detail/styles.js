import { StyleSheet } from "react-native";
import Constants from "expo-constants";
// instalar npm install expo constants
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 24,
    marginTop: 25
  },

  incidentProperty: {
    marginTop: 32,
    color: "#737380",
    fontWeight: "bold"
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 10
  },
  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    marginTop: 16
  },
  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16
  },
  action: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  actionText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold"
  }
});
