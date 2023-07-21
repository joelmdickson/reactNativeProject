import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import Joel from '../data/joel'
import { useState } from "react";
import Button from "../components/app/button"
interface Props {
    navigation: NavigationProp<ParamListBase>
}

const ProfileScreen = ({ navigation }: Props): React.JSX.Element => {
    const [firstName, setFirstName] = useState(Joel.first_name)
    const [lastName, setLastName] = useState(Joel.last_name)
    const [isVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isVisible);

    return (
        <View className="mt-4 ml-4">
            <View className="flex flex-row">
                <View className="flex justify-center rounded-full border border-black">
                    <Image
                        className=" h-12 w-12 rounded-full"
                        source={require('../data/joel.png')}
                    />
                </View>
                <View className="ml-4 items-start my-auto">
                    <View className="flex flex-row gap-1">
                        <Text className="text-lg">
                            {Joel.first_name}
                        </Text>
                        <Text className="text-lg">
                            {Joel.last_name}
                        </Text>
                    </View>
                </View>
            </View>
            <View className="mt-2">
                <Text className="text-base" >Email: {Joel.email}</Text>
            </View>
            <View className='mt-4 border border-black'>
                <TouchableOpacity
                    onPress={() => setIsModalVisible(true)}
                >
                    <Text>
                        Contact number: {Joel.contactNumber}
                    </Text>
                </TouchableOpacity>
            </View>
            <View className='mt-4 mx-auto border border-black'>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Clicker")}
                >
                    <Text>
                        Go to clicker!
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal visible={isVisible}>
                <View className="m-auto w-10 h-10">
                    <Button onPress={handleModal} className='bg-gray-200'>
                        <Text>Hide modal</Text>
                    </Button>
                </View>
            </Modal>
        </View>
    );
};

export default ProfileScreen