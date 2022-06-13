import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";

interface QRCodeFeedbackProps {
  update: () => void;
}

const QRCodeFeedback: React.FC<QRCodeFeedbackProps> = ({ update }) => {
  useEffect(() => {
    setTimeout(() => {
      update();
    }, 2000);
  }, []);
  return (
    <View>
      <View>
        <Text>Imprimindo</Text>
        <Text>O seu QR Code está sendo impresso!</Text>
        <Text>
          Depois, cole o adesivo no seu equipamento, deposite-o no tótem, e
          pronto, seus pontos serão contabilizados autmáticamente.
        </Text>
      </View>
      <View>
        <Image source={require("../../assets/printer.png")} />
      </View>
    </View>
  );
};

export default QRCodeFeedback;
