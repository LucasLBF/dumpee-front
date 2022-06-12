import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Text
        style={{ fontFamily: "Poppins", fontWeight: "bold", marginRight: 8 }}
      >
        Profile Screen is under Development!
      </Text>
      <Icon name="handyman" size={20} />
    </View>
  );
};

export default ProfileScreen;
