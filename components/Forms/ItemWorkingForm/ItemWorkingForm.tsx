import { View, Text, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./ItemWorkingFormStyles";

interface ItemWorkingFormProps {
  closeBottomSheet: () => void;
  goBack: () => void;
  updateFormState: (data: { [key: string]: string | boolean }) => void;
}

const ItemWorkingForm: React.FC<ItemWorkingFormProps> = props => {
  const { closeBottomSheet, goBack, updateFormState } = props;
  const styles = makeStyles();
  return (
    <View style={styles.formContainer}>
      <View style={styles.formHeader}>
        <Pressable onPress={goBack}>
          <Icon style={styles.formIcon} name="arrow-back" size={20} />
        </Pressable>
        <Text style={styles.formTitle}>Novo Descarte</Text>
        <Pressable onPress={closeBottomSheet}>
          <Icon style={styles.formIcon} name="close" size={20} />
        </Pressable>
      </View>
      <Text style={styles.formText}>
        O aparelho liga e todos os botões funcionam?
      </Text>
      <View style={styles.formOptionsContainer}>
        <Pressable onPress={() => updateFormState({ isWorking: true })}>
          <Image
            style={styles.formOption}
            source={require("../../../assets/sim_2.png")}
          />
        </Pressable>
        <Pressable onPress={() => updateFormState({ isWorking: false })}>
          <Image
            style={styles.formOption}
            source={require("../../../assets/nao_2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ItemWorkingForm;
