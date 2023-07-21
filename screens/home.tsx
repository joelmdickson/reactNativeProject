import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: { q: 'game of thr' },
    headers: {
        'X-RapidAPI-Key': '99a6277786mshc8cea4c18768afep186862jsn017506ce1be2',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

const getData = async () => {
    try {
        const response = await axios.request(options);
        console.log(response)
    } catch (error) {
        console.error(error);
    }
}

const HomeScreen = (): React.JSX.Element => {
    getData()
    return (
        <View className="flex flex-row gap-4 ml-2 mt-2">

        </View>
    );
};

export default HomeScreen