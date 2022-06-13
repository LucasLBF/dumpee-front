import { View, Text, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./TutorialStyles";

interface TutorialProps {
  closeBottomSheet: () => void;
  goForward: () => void;
}
const Tutorial: React.FC<TutorialProps> = ({ closeBottomSheet, goForward }) => {
  const styles = makeStyles();
  return (
    <View style={styles.formContainer}>
      <View style={styles.formHeader}>
        <View style={styles.headerCenter}>
          <Image source={require("../../../assets/new_item.png")} />
          <Text style={styles.formTitle}>Novo Descarte</Text>
        </View>
        <Icon
          style={styles.closeIcon}
          name="close"
          size={20}
          onPress={closeBottomSheet}
        />
      </View>
      <View style={styles.tutorialTextContainer}>
        <Text style={styles.formTutorialHeaderText}>
          Está pronto para desapegar de um equipamento eletroeletrônico que não
          usa mais? Siga as etapas para ganhar seus DumpeePoints!
        </Text>
      </View>
      <View>
        <Text style={styles.formTutorialText}>
          Etapa 1: Responda algumas perguntas sobre o estado do equipamento.
          Suas respostas não afetarão na sua pontuação.
        </Text>
        <Text style={styles.formTutorialText}>
          Etapa 2: vá até o tótem na recepção do Brum, imprima o QR code de
          identificação e cole no seu equipamento.
        </Text>
        <Text style={styles.formTutorialText}>
          Etapa 3: Pronto, agora é só depositar para receber seus pontos.
        </Text>
      </View>
      <View>
        <Text style={styles.formTutorialHeaderText}>Podemos começar?</Text>
        <Pressable style={styles.continueButton} onPress={goForward}>
          <Text style={styles.continueButtonText}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Tutorial;
