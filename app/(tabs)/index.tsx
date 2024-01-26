import { useEffect, useState } from "react";
import { Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Anime } from "../../types/product";
import { Link } from "expo-router";

export default function () {
  const [Animes, setAnimes] = useState<Anime[]>([]);
  useEffect(() => {
    fetch("https://kitsu.io/api/edge/anime")
      .then((res) => res.json())
      .then((data) => {
        const { animes } = data;
        setAnimes(animes);
      });
  }, []);
  return (
    <View>
      <View style={{ height: 400 }}>
        <View style={{ height: 400 }}>
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://media.kitsu.io/anime/poster_images/1/original.jpg",
            }}
            height={400}
          />
        </View>
        <View>
          <Text style={{ fontSize: 24 , color: "white"}}>Demon Slayer: Kimetsu ...</Text>
          <Text style={{ fontSize: 12 , color: "white"}}>Demon Slayer: Kimetsu ...</Text>
          <View style={{ flexDirection: "row" }}>
            <Link href={`/product/id`}>play</Link>
            <Link href={`/product/id`}>+ my list</Link>
          </View>
        </View>
      </View>
    </View>
  );
};
