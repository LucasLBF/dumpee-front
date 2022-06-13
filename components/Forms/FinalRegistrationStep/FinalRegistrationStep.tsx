import { View, Image, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface FinalRegistrationStepProps {
  closeBottomSheet: () => void;
  printQRCode: () => void;
}

const FinalRegistrationStep: React.FC<FinalRegistrationStepProps> = props => {
  const { closeBottomSheet, printQRCode } = props;
  return (
    <View>
      <View>
        <Pressable onPress={closeBottomSheet}>
          <Icon name="close" size={25} />
        </Pressable>
        <Text>Quase lá!</Text>
      </View>
      <View>
        <Text>
          Para a próxima etapa, vá até o tótem localizado na recepção do Brum.
        </Text>
        <Text>Conecte com a impressora e imprima o QR code.</Text>
      </View>
      <View>
        <Image source={require("../../../assets/DumpeePrinter.png")} />
      </View>
      <View>
        <Pressable onPress={closeBottomSheet}>
          <Text>Salvar para depois</Text>
        </Pressable>
        <Pressable onPress={printQRCode}>
          <Text>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FinalRegistrationStep;
