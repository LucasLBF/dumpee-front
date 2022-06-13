import { View, Text, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./ItemTypeFormStyles";

interface ItemTypeFormProps {
  closeBottomSheet: () => void;
  goBack: () => void;
  updateFormState: (data: { [key: string]: string | boolean }) => void;
}

const ItemTypeForm: React.FC<ItemTypeFormProps> = props => {
  const { closeBottomSheet, goBack, updateFormState } = props;
  const styles = makeStyles();
  return (
    <View style={styles.formContainer}>
      <View>
        <Pressable onPress={goBack}>
          <Icon name="arrow-back" size={25} />
        </Pressable>
        <Pressable onPress={closeBottomSheet}>
          <Icon name="close" size={25} />
        </Pressable>
        <Text>Novo Descarte</Text>
      </View>
      <Text>Qual tipo de equipamento você deseja reciclar?</Text>
      <View>
        <Pressable onPress={() => updateFormState({ itemType: "smartphone" })}>
          <View>
            <Icon name="smartphone" size={25} />
            <Text>Smartphone ou Celular</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => updateFormState({ itemType: "laptop" })}>
          <View>
            <Icon name="laptop" size={25} />
            <Text>Notebook</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => updateFormState({ itemType: "tablet" })}>
          <View>
            <Icon name="tablet" size={25} />
            <Text>Tablet</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => updateFormState({ itemType: "monitor" })}>
          <View>
            <Icon name="desktop-mac" size={25} />
            <Text>Monitor</Text>
          </View>
        </Pressable>
        <View>
          <Icon name="devices" size={25} />
          <Text>Outro, qual?</Text>
        </View>
        <TextInput placeholder="Ex: Teclado, mouse, outros acessórios"></TextInput>
      </View>
    </View>
  );
};

export default ItemTypeForm;
