import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import makeStyles from "./QRCodeFeedbackStyles";

interface QRCodeFeedbackProps {
  update: () => void;
}

const QRCodeFeedback: React.FC<QRCodeFeedbackProps> = ({ update }) => {
  useEffect(() => {
    setTimeout(() => {
      update();
    }, 3000);
  }, []);
  const styles = makeStyles();
  return (
    <View style={styles.formContainer}>
      <View style={styles.formHeader}>
        <Text style={styles.formTitle}>Imprimindo</Text>
        <Text style={styles.formText}>O seu QR Code está sendo impresso!</Text>
        <Text style={styles.formText}>
          Depois, cole o adesivo no seu equipamento, deposite-o no tótem, e
          pronto, seus pontos serão contabilizados autmáticamente.
        </Text>
      </View>
      <View style={styles.formImageContainer}>
        <Image
          style={styles.formImage}
          source={require("../../assets/printer.png")}
        />
      </View>
    </View>
  );
};

export default QRCodeFeedback;
