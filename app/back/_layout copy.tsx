import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Platform, Pressable } from 'react-native';

import Colors from '@/constants/colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { HeaderBackground } from '@/components/layout/headers';
import ThemeContext from 'ra-theme-context';
import { StatusBar } from 'expo-status-bar';

const isWeb = Platform.OS === 'web';

type Props = {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: Props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // headerShown: true,
        headerShadowVisible: false,
        //headerBackTitleVisible: false,
        //headerLargeTitleShadowVisible: false,
        //headerTintColor: this.context.colors.text,
        headerTitleAlign: 'left', //isWeb ? 'left' : 'left',
        // headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerBackground: () => (<HeaderBackground isLight={true} />),
        // tabBarStyle: { position: 'absolute', backgroundColor: 'transparent', borderTopWidth: 0 },
        headerTransparent: true,
        headerTitleStyle: {
          fontFamily: "SemiBold",
          color: 'blue'//this.context.colors.text,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 35, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default class extends React.PureComponent<{}, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  constructor(props: {}) {
    super(props);
    // this.themeColorsDialog = React.createRef();
    // this.changeColorSchemeToggle = this.changeColorSchemeToggle.bind(this);
  }

  public render() {
    const isLight = Boolean(this.context.colorScheme === 'light');

    return(
      <>
        <StatusBar backgroundColor={'transparent'} animated={true} />
        <Tabs
          screenOptions={{
            // headerShown: true,
            headerShadowVisible: false,
            //headerBackTitleVisible: false,
            //headerLargeTitleShadowVisible: false,
            //headerTintColor: this.context.colors.text,
            headerTitleAlign: 'left', //isWeb ? 'left' : 'left',
            // headerShown: useClientOnlyValue(false, true),
            tabBarActiveTintColor: this.context.colors.primary,
            headerBackground: () => (<HeaderBackground isLight={isLight} />),
            // tabBarStyle: { position: 'absolute', backgroundColor: 'transparent', borderTopWidth: 0 },
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "SemiBold",
              color: this.context.colors.text,
            }
          }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={this.context.colors.text}
                    style={{ marginRight: 35, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
      </>
    );
  }
}