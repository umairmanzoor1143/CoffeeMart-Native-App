import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d1d1d1",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
  buttonContainer: {
    position: "absolute",
    bottom: "3%", // Adjust the bottom spacing as needed
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: 250,
    gap: 30,
  },
  TextTitle: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  TextDiscription: {
    color: "#A9A9A9",
    textAlign: "center",
    width: 200,
  },
  SignInBtn: {
    backgroundColor: "#fff",
    width: "80%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
  },
  GoogleIcon: {},
  SignInText: {
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "700",
    fontSize: 18,
  },
})
