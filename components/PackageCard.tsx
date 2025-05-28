import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '@/utils/theme';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Check } from 'lucide-react-native';

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  index: number;
}

export function PackageCard({ title, price, description, features, index }: PackageCardProps) {
  const router = useRouter();
  
  const handleInquire = () => {
    router.push('/contact');
  };

  return (
    <Animated.View 
      entering={FadeInRight.delay(200 + (index * 100)).duration(600)}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      
      <Text style={styles.description}>{description}</Text>
      
      <View style={styles.featuresList}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <View style={styles.checkIconContainer}>
              <Check size={16} color={theme.colors.primary} />
            </View>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
      
      <Pressable 
        style={styles.inquireButton}
        onPress={handleInquire}
      >
        <Text style={styles.inquireButtonText}>Inquire Now</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: theme.colors.text.primary,
  },
  price: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: theme.colors.primary,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    marginBottom: 16,
    lineHeight: 22,
  },
  featuresList: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  featureText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    flex: 1,
  },
  inquireButton: {
    backgroundColor: theme.colors.accent,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  inquireButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'white',
  },
});