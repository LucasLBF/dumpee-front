import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const makeStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: theme.colors.primaryBeige,
    },
    header: {
      backgroundColor: theme.colors.primaryGreen,
      width: "100%",
      flexDirection: "row",
      flex: 2,
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
    },
    headerTitle: {
      color: theme.colors.primaryBeige,
      fontFamily: "Poppins",
      fontWeight: "600",
      letterSpacing: -1,
      fontSize: 32,
    },
    edit: {
      color: theme.colors.primaryBeige,
      fontFamily: "Poppins",
      fontSize: 14,
      fontWeight: "400",
    },
    optionsContainer: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 64,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    fab: {
      position: "absolute",
      right: 16,
      bottom: 16,
      backgroundColor: theme.colors.light.primary,
    },
    option: {
      color: "#00391C",
      fontFamily: "Poppins",
      fontSize: 12,
    },
    optionDisabled: {
      color: "#9EAB9C",
      fontFamily: "Poppins",
      fontSize: 12,
    },
    itemListContainer: {
      flex: 11,
      width: "100%",
    },
    itemList: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 24,
    },
    item: {
      backgroundColor: "#FBFBFB",
      borderRadius: 16,
      marginBottom: 8,
      flexDirection: "row",
      alignItems: "center",
      height: 64,
      paddingHorizontal: 8,
    },
    itemName: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: 12,
      color: "#464646",
    },
    itemIcon: {
      marginRight: 16,
    },
    itemBrand: {
      fontFamily: "Roboto",
      fontSize: 10,
      color: "#464646",
    },
    statusIconContainer: {
      marginLeft: "auto",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 64,
    },
    points: {
      fontFamily: "Poppins",
      fontSize: 16,
      marginRight: 8,
    },
  });
};

export default makeStyles;
