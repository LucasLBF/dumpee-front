import { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import makeStyles from "./SignUpScreenStyles";

interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const styles = makeStyles();
  const [nameText, setNameText] = useState("");
  const [pronounText, setPronounText] = useState("");
  return (
    <View style={styles.signUpContainer}>
      <Pressable onPress={() => navigation.navigate("Welcome")}>
        <Text>Go Back</Text>
      </Pressable>
      <View style={styles.avatarContainer}>
        <Image source={require("../../assets/add_profilePic.png")} />
        <IconButton
          icon="pencil-outline"
          style={styles.changeAvatarButton}
          size={16}
          color="#FBFDF7"
          onPress={() => console.log("change profile pic")}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.inputText}>
          Como você gostaria que te chamassem?
        </Text>
        <TextInput
          style={styles.formInput}
          mode="flat"
          label="Nome"
          value={nameText}
          activeUnderlineColor="#335D42"
          onChangeText={nameText => setNameText(nameText)}
        />
        <Text style={styles.inputText}>Pronomes</Text>
        <TextInput
          style={styles.formInput}
          mode="flat"
          label="Ex: Ela/Ele/Elu"
          value={pronounText}
          activeUnderlineColor="#335D42"
          onChangeText={pronounText => setPronounText(pronounText)}
        />
        <Button
          style={
            !nameText || !pronounText
              ? styles.submitButtonDisabled
              : styles.submitButton
          }
          mode="contained"
          disabled={!nameText || !pronounText}
        >
          Finalizar
        </Button>
      </View>
    </View>
  );
};

export default SignUpScreen;
