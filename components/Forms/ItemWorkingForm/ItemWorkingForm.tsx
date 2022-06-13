import { View, Text, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface ItemWorkingFormProps {
  closeBottomSheet: () => void;
  goBack: () => void;
  updateFormState: (data: { [key: string]: string | boolean }) => void;
}

const ItemWorkingForm: React.FC<ItemWorkingFormProps> = props => {
  const { closeBottomSheet, goBack, updateFormState } = props;
  return (
    <View>
      <View>
        <Pressable onPress={goBack}>
          <Icon name="arrow-back" size={25} />
        </Pressable>
        <Pressable onPress={closeBottomSheet}>
          <Icon name="close" size={25} />
        </Pressable>
        <Text>Novo Descarte</Text>
      </View>
      <Text>O aparelho liga e todos os botões funcionam?</Text>
      <View>
        <Pressable onPress={() => updateFormState({ isWorking: true })}>
          <Image source={require("../../../assets/sim_2.png")} />
        </Pressable>
        <Pressable onPress={() => updateFormState({ isWorking: false })}>
          <Image source={require("../../../assets/nao_2.png")} />
        </Pressable>
      </View>
    </View>
  );
};

export default ItemWorkingForm;
