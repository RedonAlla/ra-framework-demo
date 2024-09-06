import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
// import AppLink from '@/components/intro/AppLink';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      {/* <AppLink href="/modal" title="Demo App" description="Test demo app">
        <View style={{}}>
          <Text style={styles.title}>Modal</Text>
        </View>
      </AppLink> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  containerA: {
    height: '45%',
  },
  animatedView: {
    position: 'relative',
    marginHorizontal: 16,
    height: '100%'
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    height: '65%',
    position: 'absolute',
    bottom: '15%',
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  cardSpace: {
    flex: 1,
  },
  cardContent: {
    flex: 1,
    paddingLeft: 32
  },
  title2: {
    fontSize: 18,
    fontFamily: 'Bold',
    paddingBottom: 12
  },
  description: {
    fontSize: 16,
    fontFamily: 'Regular',
  },
  icon: {
    position: 'absolute',
    left: '-3%',
    bottom: '-3%'
  }
});
