import { useState, useRef } from "react";
import { Text, View, Pressable, FlatList, Image } from "react-native";
import { FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import makeStyles from "./RecycleScreenStyles";
import BottomSheet from "reanimated-bottom-sheet";
import ItemRegistrationForm from "../Forms/ItemRegistrationForm/ItemRegistrationForm";

const RecycleScreen = () => {
  const [filter, setFilter] = useState("todos");
  const sheetRef = useRef<BottomSheet>(null);
  const [items, setItems] = useState([
    {
      itemType: "smartphone",
      itemBrand: "Apple Iphone 8",
      itemStatus: "andamento",
      points: 0,
    },
    {
      itemType: "laptop",
      itemBrand: "HP Spire BL",
      itemStatus: "finalizado",
      points: 30,
    },
  ]);
  const renderAllItems = () => (
    <FlatList
      style={styles.itemList}
      data={items}
      renderItem={itemData => {
        const { item } = itemData;
        const capitalizedName =
          item.itemType.charAt(0).toUpperCase() + item.itemType.slice(1);
        return (
          <View style={styles.item}>
            <Icon
              style={styles.itemIcon}
              name={`${item.itemType}`}
              color="#464646"
              size={40}
            />
            <View>
              <Text style={styles.itemName}>{capitalizedName}</Text>
              <Text style={styles.itemBrand}>{item.itemBrand}</Text>
            </View>
            <View style={styles.statusIconContainer}>
              {item.itemStatus == "andamento" ? (
                <Icon name="print" color="#464646" size={25} />
              ) : (
                <>
                  <Text style={styles.points}>{`+${item.points}`}</Text>
                  <Image source={require("../../assets/DumpeePoints.png")} />
                </>
              )}
            </View>
          </View>
        );
      }}
    />
  );

  const renderInProgressItems = () => (
    <Text style={{ textAlign: "center" }}>Nenhum Item encontrado</Text>
  );

  const renderFinishedItems = () => (
    <Text style={{ textAlign: "center" }}>Nenhum Item encontrado</Text>
  );

  const styles = makeStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Descartes</Text>
        <Pressable>
          <Text style={styles.edit}>Editar</Text>
        </Pressable>
      </View>
      <View style={styles.optionsContainer}>
        <Pressable onPress={() => setFilter("todos")}>
          <Text
            style={filter === "todos" ? styles.option : styles.optionDisabled}
          >
            Todos
          </Text>
        </Pressable>
        <Pressable onPress={() => setFilter("andamento")}>
          <Text
            style={
              filter === "andamento" ? styles.option : styles.optionDisabled
            }
          >
            Em Andamento
          </Text>
        </Pressable>
        <Pressable onPress={() => setFilter("finalizados")}>
          <Text
            style={
              filter === "finalizados" ? styles.option : styles.optionDisabled
            }
          >
            Finalizados
          </Text>
        </Pressable>
      </View>
      <View style={styles.itemListContainer}>
        {filter === "todos"
          ? renderAllItems()
          : filter === "andamento"
          ? renderInProgressItems()
          : renderFinishedItems()}
      </View>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => sheetRef.current?.snapTo(0)}
      />
      <ItemRegistrationForm sheetRef={sheetRef} />
    </View>
  );
};

export default RecycleScreen;
