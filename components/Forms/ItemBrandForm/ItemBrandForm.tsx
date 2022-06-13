import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./ItemBrandFormStyles";

interface ItemBrandFormProps {
  closeBottomSheet: () => void;
  goBack: () => void;
  updateFormState: (data: { [key: string]: string | boolean }) => void;
}

const ItemBrandForm: React.FC<ItemBrandFormProps> = props => {
  const { closeBottomSheet, goBack, updateFormState } = props;
  const [itemData, setItemData] = useState({
    itemBrand: "",
    itemModel: "",
    itemYear: "",
  });
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
      <View style={styles.textInputContainer}>
        <View style={styles.inputControl}>
          <Text style={styles.inputLabelText}>Qual a marca?</Text>
          <TextInput
            style={styles.input}
            value={itemData.itemBrand}
            onChangeText={text => setItemData({ ...itemData, itemBrand: text })}
            placeholder="Ex: Apple, Samsung, Xiaomi"
          />
        </View>
        <View style={styles.inputControl}>
          <Text style={styles.inputLabelText}>Qual o modelo?</Text>
          <TextInput
            style={styles.input}
            value={itemData.itemModel}
            onChangeText={text => setItemData({ ...itemData, itemModel: text })}
            placeholder="Ex: iPhone8, Galaxy S9"
          />
        </View>
        <View style={styles.inputControl}>
          <Text style={styles.inputLabelText}>Em que ano você o adquiriu?</Text>
          <TextInput
            style={styles.input}
            value={itemData.itemYear}
            onChangeText={text => setItemData({ ...itemData, itemYear: text })}
            placeholder="Ex: 2022"
          />
        </View>
      </View>
      <Pressable
        style={styles.continueButton}
        onPress={() => updateFormState(itemData)}
      >
        <Text style={styles.continueButtonText}>Próximo</Text>
      </Pressable>
    </View>
  );
};

export default ItemBrandForm;
