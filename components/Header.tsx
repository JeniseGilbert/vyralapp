import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation, useRouter, usePathname } from 'expo-router';
import { theme } from '@/utils/theme';
import { StatusBar } from 'expo-status-bar';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export function Header({ title, showBackButton = false }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isMainScreen = pathname === '/' || pathname === '/index';
  
  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {!isMainScreen && (
        <Pressable 
          style={styles.backButton} 
          onPress={handleBack}
          hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          <ArrowLeft color="white" size={24} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    bottom: 14,
    zIndex: 10,
  },
});