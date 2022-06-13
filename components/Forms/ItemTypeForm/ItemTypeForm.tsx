import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./ItemTypeFormStyles";

interface ItemTypeFormProps {
  closeBottomSheet: () => void;
  goBack: () => void;
  updateFormState: (data: { [key: string]: string | boolean }) => void;
}

const ItemTypeForm: React.FC<ItemTypeFormProps> = props => {
  const { closeBottomSheet, goBack, updateFormState } = props;
  const [inputState, setInputState] = useState("");
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
      <View style={styles.headerCenter}>
        <Text style={styles.formTutorialHeaderText}>
          Qual tipo de equipamento você deseja reciclar?
        </Text>
      </View>
      <View>
        <Pressable onPress={() => updateFormState({ itemType: "smartphone" })}>
          <View style={styles.itemOption}>
            <Icon style={styles.itemOptionIcon} name="smartphone" size={25} />
            <Text style={styles.itemOptionText}>Smartphone ou Celular</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => updateFormState({ itemType: "laptop" })}>
          <View style={styles.itemOption}>
            <Icon style={styles.itemOptionIcon} name="laptop" size={25} />
            <Text style={styles.itemOptionText}>Notebook</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => updateFormState({ itemType: "tablet" })}>
          <View style={styles.itemOption}>
            <Icon
              style={styles.itemOptionIcon}
              name="tablet-android"
              size={25}
            />
            <Text style={styles.itemOptionText}>Tablet</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => updateFormState({ itemType: "monitor" })}>
          <View style={styles.itemOption}>
            <Icon style={styles.itemOptionIcon} name="desktop-mac" size={25} />
            <Text style={styles.itemOptionText}>Monitor</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => updateFormState({ itemType: inputState })}>
          <View style={styles.itemOption}>
            <Icon style={styles.itemOptionIcon} name="devices" size={25} />
            <Text style={styles.itemOptionText}>Outro, qual?</Text>
          </View>
        </Pressable>
        <TextInput
          placeholder="Ex: Teclado, mouse, outros acessórios"
          value={inputState}
          onChangeText={text => setInputState(text)}
          mode="outlined"
        />
      </View>
    </View>
  );
};

export default ItemTypeForm;
