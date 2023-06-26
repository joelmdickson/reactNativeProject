import { Button, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useState } from "react";

const ClickerScreen = (): React.JSX.Element => {
    const [count, setCount] = useState(0);

    return (
        <View className="my-auto">
            <View className="items-center">
                <Text>You have clicked this {count} times</Text>
                <Button title="Click me" onPress={() => setCount(count + 1)} />
            </View>
        </View>
    );
};

export default ClickerScreen