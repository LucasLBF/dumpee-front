import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

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
      <View>
        <View>
          <Text>Qual a marca?</Text>
          <TextInput
            value={itemData.itemBrand}
            onChangeText={text => setItemData({ ...itemData, itemBrand: text })}
            placeholder="Ex: Apple, Samsung, Xiaomi"
          />
        </View>
        <View>
          <Text>Qual o modelo?</Text>
          <TextInput
            value={itemData.itemModel}
            onChangeText={text => setItemData({ ...itemData, itemModel: text })}
            placeholder="Ex: iPhone8, Galaxy S9"
          />
        </View>
        <View>
          <Text>Em que ano você o adquiriu?</Text>
          <TextInput
            value={itemData.itemYear}
            onChangeText={text => setItemData({ ...itemData, itemYear: text })}
            placeholder="Ex: 2022"
          />
        </View>
      </View>
      <Pressable onPress={() => updateFormState(itemData)}>
        <Text>Próximo</Text>
      </Pressable>
    </View>
  );
};

export default ItemBrandForm;
