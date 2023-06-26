import { StatusBar } from "expo-status-bar";
import { Button, Image, Text, View } from "react-native";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import Joel from '../data/joel'

interface Props {
    navigation: NavigationProp<ParamListBase>
}

const ProfileScreen = ({ navigation }: Props): React.JSX.Element => {
    return (
        <View>
            <View className="flex flex-row mt-4 ml-4">
                <View className="items-start">
                    <Text>Full name: {Joel.first_name} {Joel.last_name}</Text>
                    <Text >Email: {Joel.email}</Text>
                </View>
                <View className="ml-6">
                    <Image
                        className="h-40 w-28"
                        source={require('../data/joel.png')}
                    />
                </View>
            </View>
            <View className='mt-4'>
                <Button
                    title="Go to Clicker"
                    onPress={() => navigation.navigate("Clicker")}
                />
            </View>
            <StatusBar style="dark" />
        </View>
    );
};

export default ProfileScreen