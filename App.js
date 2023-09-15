import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Image
} from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

const DATA = [
  {
    id: "1",
    title: "Pupusas",
    img: "https://hispanickitchen.com/wp-content/uploads/2017/03/Pupusas-1500-700x500.jpg",
    cal: "Cantidad de calorias: 256 C/U"
  },
  {
    id: "2",
    title: "Tamales de elotes",
    img: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/01_2021/am-thuc-duong-pho-mexico-Tamales.jpg",
    cal: "Cantidad de calorias: 151 por cada 110g"
  },
  {
    id: "3",
    title: "Yuca frita",
    img: "https://lafreidoradeaire.com/wp-content/uploads/2021/12/DEDITOS-DE-YUCA-Y-QUESO.png",
    cal: "Cantidad de calorias: 108 cada 58g"
  },
  {
    id: "4",
    title: "Sopa de pata",
    img: "https://www.196flavors.com/wp-content/uploads/2020/09/sopa-de-pata-4-FP.jpeg",
    cal: "Cantidad de calorias: 240 por cada 112g"
  },
  {
    id: "5",
    title: "Panes con gallina",
    img: "https://www.tipicosmargoth.com/wp-content/uploads/2022/08/PAN-CON-POLLO-WEB-456x375px.jpg",
    cal: "Cantidad de calorias: Aprox 425 C/U"
  },
  {
    id: "6",
    title: "Atol de maiz",
    img: "https://tipsparatuviaje.com/wp-content/uploads/2020/02/atol-bebida-1024x683.jpg",
    cal: "Cantidad de calorias: 123 por cada 100 gramos"
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function App() {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      {DATA.map((u,i)=>{
        return(
          <Card containerStyle={styles.item}>
            <Text style={styles.title}>{u.title}</Text>
            <Image style={styles.image} source={u.img}/>
            <Text>{u.cal}</Text>
          </Card>
        )
      })}

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A6A6A",
  },
  item: {
    backgroundColor: "#BA7300",
    alignItems:"flex-start",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 1,
  },
  title: {
    fontSize: 32,
    marginBottom: 4
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});
