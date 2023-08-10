import { Button, StyleSheet, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

export default function App() {
  const tw = useTailwind();
  return (
    <View style={tw("flex-1 justify-center items-center")}>
      <Text>Tinder App</Text>
      <Button title='Click me' />
    </View>
  );
}
