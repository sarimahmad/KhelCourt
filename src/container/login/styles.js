import { Platform, StyleSheet } from "react-native";
import constant from "../../utility/constant";
import colors from "../../utility/constant";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: "15%",
    borderRadius:100
  },

  logos: {
    alignSelf: "center",
    resizeMode: "contain",
  },

  btn: {
    marginTop: "5%",
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  emailPasswordContainer: {
    marginTop: "2%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    // justifyContent: "space-between",
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 0.3,
      width: 0.1,
    },
  },

  inputText: {
    width: "90%",
    marginHorizontal: "2%",
    fontFamily: constant.PoppinsRegular,
  },
  form: {
    marginHorizontal: "5%",
  },
});
