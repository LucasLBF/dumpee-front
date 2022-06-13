import { View, Image, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./FinalRegistrationStepStyles";

interface FinalRegistrationStepProps {
  closeBottomSheet: () => void;
  printQRCode: () => void;
}

const FinalRegistrationStep: React.FC<FinalRegistrationStepProps> = props => {
  const { closeBottomSheet, printQRCode } = props;
  const styles = makeStyles();
  return (
    <View style={styles.formContainer}>
      <View style={styles.formHeader}>
        <Text style={styles.formTitle}>Quase lá!</Text>
        <Icon
          style={styles.closeIcon}
          name="close"
          size={20}
          onPress={closeBottomSheet}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.formText}>
          Para a próxima etapa, vá até o tótem localizado na recepção do Brum.
        </Text>
        <Text style={styles.formText}>
          Conecte com a impressora e imprima o QR code.
        </Text>
      </View>
      <View style={styles.formImageContainer}>
        <Image
          style={styles.formImage}
          source={require("../../../assets/DumpeePrinter.png")}
        />
      </View>
      <View style={styles.optionsContainer}>
        <Pressable style={styles.optionButton} onPress={closeBottomSheet}>
          <Text style={styles.optionButtonText}>Salvar para depois</Text>
        </Pressable>
        <Pressable style={styles.optionButton} onPress={printQRCode}>
          <Text style={styles.optionButtonText}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FinalRegistrationStep;
