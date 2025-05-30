import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function OtherPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-lg">This is another page.</Text>
      <Link href="/" style={{ marginTop: 10, color: 'blue' }}>Go Back</Link>
    </View>
  );
}
