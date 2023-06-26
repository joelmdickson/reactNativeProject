import { Button, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import Joel from '../../data/joel'

interface Props {
  navigation: NavigationProp<ParamListBase>
}

export default function HomeHeader({ navigation }: Props) {
  return (
    <View className="flex flex-row gap-4 ml-2 mt-2">
      <Button title="Clicker" onPress={() => navigation.navigate("Clicker")} />
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile", Joel)}
      />
    </View>
  );
}
