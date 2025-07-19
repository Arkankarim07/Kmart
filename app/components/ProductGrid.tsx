import { MapPin, Star } from "lucide-react-native";
import { ImageBackground, Text, View } from "react-native";

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
    image: require('../../assets/images/gitar.png'),
    price: 'Rp.24.000.000',
    star: 5,
    sold: 140,
    location: 'Bekasi'
  },
  {
    id: '3',
    name: 'Samsung S24 8/12GB White/Silver',
    image: require('../../assets/images/samsung.png'),
    price: 'Rp.24.000.000',
    star: 5,
    sold: 140,
    location: 'Jakarta'
  },
  {
    id: '4',
    name: 'Samsung S24 8/12GB White/Silver',
    image: require('../../assets/images/gitar.png'),
    price: 'Rp.24.000.000',
    star: 5,
    sold: 140,
    location: 'Bekasi'
  },
  {
    id: '5',
    name: 'Samsung S24 8/12GB White/Silver',
    image: require('../../assets/images/samsung.png'),
    price: 'Rp.24.000.000',
    star: 5,
    sold: 140,
    location: 'Jakarta'
  },
  {
    id: '6',
    name: 'Samsung S24 8/12GB White/Silver',
    image: require('../../assets/images/gitar.png'),
    price: 'Rp.24.000.000',
    star: 5,
    sold: 140,
    location: 'Bekasi'
  }
]

export default function ProductGrid() {
  return (
     <View className="flex-row flex-wrap justify-between px-2 mt-4">
      {product.map((item) => (
        <View
          key={item.id}
          style={{ width: '48%' }}
          className="bg-white mb-4 rounded-[12px] overflow-hidden"
        >
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            className="w-full h-[140px]"
          />
          <View className="p-2">
            <Text numberOfLines={2} className="text-sm font-manrope_bold">{item.name}</Text>
            <Text className="text-sm font-manrope_bold text-red-500">{item.price}</Text>
            <View className="flex-row items-center gap-1 mt-1">
              <Star size={16} color="orange" />
              <Text className="text-xs text-gray-600">{item.star} | {item.sold}Rb+ Sold</Text>
            </View>
            <View className="flex-row items-center gap-1 mt-1">
              <MapPin size={16} color="green" />
              <Text className="text-xs text-gray-600">{item.location}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
