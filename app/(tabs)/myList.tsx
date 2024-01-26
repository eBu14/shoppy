import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

 export default function Page() {
  const [basket, setBasket] = useState<string[]>([]);
   useEffect(() => {
     AsyncStorage.getItem("basket").then((res) => {
       if (res) {
         console.log("res:", res);
          setBasket(JSON.parse(res));
       }
     });
   }, []);
   return (
     <View style={{ flex: 1, alignItems: "center" }}>
       <Text>about page <Link href={"../"}>go to home</Link></Text>
       {basket.map((id) => {
        return(
          <View> 
            <Text>{id}</Text>
          </View>
        )
       })}
     </View>
   );
 };
