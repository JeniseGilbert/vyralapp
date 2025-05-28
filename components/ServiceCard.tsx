import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '@/utils/theme';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { ArrowRight } from 'lucide-react-native';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

interface ServiceCardProps {
  service: ServiceProps;
  index: number;
  onPress: () => void;
}

export function ServiceCard({ service, index, onPress }: ServiceCardProps) {
  return (
    <Animated.View 
      entering={FadeInUp.delay(300 + (index * 100)).duration(600)}
      style={styles.container}
    >
      <Pressable 
        style={styles.card} 
        onPress={onPress}
        android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
      >
        <Image source={{ uri: service.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{service.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {service.description}
          </Text>
          <View style={styles.learnMore}>
            <Text style={styles.learnMoreText}>Learn More</Text>
            <ArrowRight size={16} color={theme.colors.primary} />
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 16,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: theme.colors.text.primary,
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  learnMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  learnMoreText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: theme.colors.primary,
    marginRight: 4,
  },
});