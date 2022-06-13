import { View, Text, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./ItemConditionsFormStyles";

interface ItemConditionsProps {
  closeBottomSheet: () => void;
  goBack: () => void;
  updateFormState: (data: { [key: string]: string | boolean }) => void;
}

const ItemConditionsForm: React.FC<ItemConditionsProps> = props => {
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
        O equipamento está em boas condições físicas?
      </Text>
      <View style={styles.formOptionsContainer}>
        <Pressable onPress={() => updateFormState({ isBroken: false })}>
          <Image
            style={styles.formOption}
            source={require("../../../assets/sim_1.png")}
          />
        </Pressable>
        <Pressable onPress={() => updateFormState({ isBroken: true })}>
          <Image
            style={styles.formOption}
            source={require("../../../assets/nao_1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ItemConditionsForm;
