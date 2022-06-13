import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./ItemRegistrationFinishStyles";

interface ItemRegistrationFinishProps {
  closeBottomSheet: () => void;
}

const ItemRegistrationFinish: React.FC<ItemRegistrationFinishProps> = ({
  closeBottomSheet,
}) => {
  const styles = makeStyles();
  return (
    <View style={styles.formContainer}>
      <View style={styles.formHeader}>
        <Text style={styles.formTitle}>Parabéns!</Text>
        <Text style={styles.formText}>
          Você acabou de finalizar mais um descarte.
        </Text>
        <View style={styles.DPContainer}>
          <Text style={styles.DPValue}>+ 30</Text>
          <Image
            style={styles.DPIcon}
            source={require("../../assets/DumpeePoints.png")}
          />
        </View>
        <Icon
          style={styles.closeIcon}
          name="close"
          size={20}
          onPress={closeBottomSheet}
        />
      </View>
      <View style={styles.formImageContainer}>
        <Image
          style={styles.formImage}
          source={require("../../assets/congrats.png")}
        />
      </View>
      <View>
        <Pressable style={styles.continueButton} onPress={closeBottomSheet}>
          <Text style={styles.continueButtonText}>Fechar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ItemRegistrationFinish;
