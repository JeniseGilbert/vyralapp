import { Tabs } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';
import { Chrome as Home, ShoppingBag, Headphones, Printer, Phone } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';
import { theme } from '@/utils/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          Platform.OS === 'ios' 
            ? <BlurView tint="dark\" intensity={80} style={StyleSheet.absoluteFill} />
            : <View style={[StyleSheet.absoluteFill, styles.tabBarBackground]} />
        ),
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="merch"
        options={{
          title: 'Merch',
          tabBarIcon: ({ color, size }) => (
            <ShoppingBag size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tech"
        options={{
          title: 'Tech',
          tabBarIcon: ({ color, size }) => (
            <Headphones size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="graphics"
        options={{
          title: 'Graphics',
          tabBarIcon: ({ color, size }) => (
            <Printer size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Phone size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
    height: 80,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  tabBarBackground: {
    backgroundColor: 'rgba(18, 18, 18, 0.85)',
  },
  tabBarLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
  }
});