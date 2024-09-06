import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import ThemeContext from 'ra-theme-context';

import { useColorScheme } from '@/components/useColorScheme';
import { HeaderBackground } from '@/components/layout/headers';


const isWeb = Platform.OS === 'web';

type Props = {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: Props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
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
          sceneContainerStyle= {{
            backgroundColor: this.context.colors.background,
            overflow: 'hidden',
            paddingTop: isWeb ? 70 : 0,
          }}
          
          screenOptions={{
            headerShadowVisible: false,
            headerTitleAlign: 'left', //isWeb ? 'left' : 'left',
            headerBackground: () => (<HeaderBackground isLight={isLight} />),
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "SemiBold",
              color: this.context.colors.text,
            },
            tabBarAllowFontScaling: true,
            tabBarActiveBackgroundColor: 'transparent',
            tabBarInactiveBackgroundColor: 'transparent',
            tabBarInactiveTintColor: this.context.colors.text,
            tabBarActiveTintColor: this.context.colors.primary,
            tabBarStyle: {
              position: 'absolute',
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              elevation: 0
            },
            tabBarBackground: () => (<HeaderBackground isLight={isLight} />)
        }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Components',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              // headerRight: () => (
              //   <Link href="/modal" asChild>
              //     <Pressable>
              //       {({ pressed }) => (
              //         <FontAwesome
              //           name="info-circle"
              //           size={25}
              //           color={this.context.colors.text}
              //           style={{ marginRight: 35, opacity: pressed ? 0.5 : 1 }}
              //         />
              //       )}
              //     </Pressable>
              //   </Link>
              // ),
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

const styles = StyleSheet.create({
  contentStyle: {
    overflow: 'hidden',
    paddingTop: isWeb ? 72 : 0,
  }
})