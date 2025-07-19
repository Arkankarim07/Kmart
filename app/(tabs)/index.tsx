import { useRouter } from "expo-router";
// import { useEffect, useState } from "react";
import { Bell, ShoppingCart } from "lucide-react-native";
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductGrid from "../components/ProductGrid";
import UseFont from "../hooks/useFont";
const { width } = Dimensions.get('window');
export default function Index() {
// const [token, setToken] = useState(null);
//     useEffect(() => {
//     const fetchToken = async () => {
//       const jwt = await SecureStore.getItemAsync('jwt_token');
//       setToken(jwt);
//     };
//     fetchToken();
//   }, []);

  const images = [
    require('../../assets/images/slider1.png'),
    require('../../assets/images/slider2.png'),
  ]
  const bgImage = require('../../assets/images/bg-category.png')
  const samsung = require('../../assets/images/samsung.png')
  const item = [
    { id: '1', name: 'Handphone', image: require('../../assets/images/hp-icon.png') },
    { id: '2', name: 'Laptop', image: require('../../assets/images/laptop-icon.png') },
    { id: '3', name: 'Guitar', image: require('../../assets/images/guitar-icon.png') },
    { id: '4', name: 'Jacket', image: require('../../assets/images/jacket-icon.png') },
    { id: '5', name: 'Dumbell', image: require('../../assets/images/dumbell-icon.png') },
    { id: '6', name: 'TV', image: require('../../assets/images/tv-icon.png') },
    { id: '7', name: 'Pants', image: require('../../assets/images/pants-icon.png') },
    { id: '8', name: 'Bag', image: require('../../assets/images/bag-icon.png') },
  ]

  const product = [
    {
      id: '1',
      name: 'Samsung S24 8/12GB White/Silver',
      image: require('../../assets/images/samsung.png'),
      price: 'Rp.24.000.000',
      star: 5,
      sold: 140,
      location: 'Jakarta'
    },
    {
      id: '2',
      name: 'Samsung S24 8/12GB White/Silver',
      image: require('../../assets/images/samsung.png'),
      price: 'Rp.24.000.000',
      star: 5,
      sold: 140,
      location: 'Bekasi'
    }
  ]

  const router = useRouter();
  return (
    <UseFont>
      <SafeAreaView edges={['top']} className="flex-1">
        <View className="flex px-3 py-3 flex-row items-center gap-7">
          <TextInput
            placeholder="Search"
            className="p-3 w-[70%] rounded-2xl border border-gray-400 " />
          <ShoppingCart size={25} />
          <Bell size={25} />
        </View>
        <ScrollView>
        
        <View>
          <FlatList
            data={images}
            horizontal

            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={item} resizeMode="contain" style={{ width: width }} />
            )}
          />
        </View>
        <View className="flex-1 px-[8px]">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-manrope_bold">Categories</Text>
            <Text className="text-sm opacity-75 font-manrope_medium">See All {">"} </Text>
          </View>
          <View />
          <View>
            <ScrollView
              horizontal

              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 46, marginTop: 11 }}
            >
              {item.map((item, index) => (
                <View key={index} className="flex items-center gap-2">
                  <ImageBackground source={bgImage} resizeMode="stretch" className="w-[56px] h-[56px] rounded-full flex items-center justify-center">
                    <Image source={item.image} className="" />
                  </ImageBackground>
                  <Text className="text-sm font-manrope_medium">{item.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View className="mt-10">
            <Text className="text-xl font-manrope_bold">Popular</Text>
            <ProductGrid />
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </UseFont>
  );
}
