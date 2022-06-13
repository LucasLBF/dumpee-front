import React from "react";
import { View, Image, Text, Pressable } from "react-native";

interface ItemRegistrationFinishProps {
  closeBottomSheet: () => void;
}

const ItemRegistrationFinish: React.FC<ItemRegistrationFinishProps> = ({
  closeBottomSheet,
}) => {
  return (
    <View>
      <View>
        <Text>Parabéns!</Text>
        <Text>Você acabou de finalizar mais um descarte.</Text>
        <View>
          <Text>+ 30</Text>
          <Image source={require("../../assets/DumpeePoints.png")} />
        </View>
      </View>
      <View>
        <Image source={require("../../assets/congrats.png")} />
      </View>
      <View>
        <Pressable onPress={closeBottomSheet}>
          <Text>Fechar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ItemRegistrationFinish;
