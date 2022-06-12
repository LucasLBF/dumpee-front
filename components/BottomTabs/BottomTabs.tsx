import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import HomeScreen from "../HomeScreen/HomeScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import RankingScreen from "../RankingScreen/RankingScreen";
import RecycleScreen from "../RecycleScreen/RecycleScreen";
import WorkShopScreen from "../WorkshopScreen/WorkShopScreen";
import makeStyles from "./BottomTabsStyles";

interface BottomTabsProps {
  navigation: any;
}

const BottomTabs = ({ navigation }: BottomTabsProps) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "ranking", title: "Ranking", icon: "poll" },
    { key: "recycle", title: "Descarte", icon: "recycle" },
    { key: "workshop", title: "Workshop", icon: "store" },
    { key: "profile", title: "Perfil", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    ranking: RankingScreen,
    recycle: RecycleScreen,
    workshop: WorkShopScreen,
    profile: ProfileScreen,
  });

  const styles = makeStyles();

  return (
    <BottomNavigation
      style={styles.bottomTabContainer}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#000"
      inactiveColor="#92918A"
    />
  );
};

export default BottomTabs;
