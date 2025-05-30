import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-xl font-bold">Hello World</Text>
      <Link href="/other" style={{ marginTop: 10, color: 'blue' }}>Go to Other Page</Link>
    </View>
  );
}
