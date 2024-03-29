import { View, Text } from "react-native";
import Constans from "expo-constants";
import { Slot, Stack, Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="calendar" />
      <Tabs.Screen name="myList" />
      <Tabs.Screen name="download" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
