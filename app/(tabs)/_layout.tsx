import { View, Text } from "react-native";
import Constans from "expo-constants";
import { Slot, Stack, Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="about" />
    </Tabs>
  );
}
