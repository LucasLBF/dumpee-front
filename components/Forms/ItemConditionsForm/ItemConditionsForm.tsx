import { View, Text, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface ItemConditionsProps {
  closeBottomSheet: () => void;
  goBack: () => void;
  updateFormState: (data: { [key: string]: string | boolean }) => void;
}

const ItemConditionsForm: React.FC<ItemConditionsProps> = props => {
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
      <Text>O equipamento está em boas condições físicas?</Text>
      <View>
        <Pressable onPress={() => updateFormState({ isBroken: false })}>
          <Image source={require("../../../assets/sim_1.png")} />
        </Pressable>
        <Pressable onPress={() => updateFormState({ isBroken: true })}>
          <Image source={require("../../../assets/nao_1.png")} />
        </Pressable>
      </View>
    </View>
  );
};

export default ItemConditionsForm;
