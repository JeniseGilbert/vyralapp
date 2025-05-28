import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/utils/theme';
import { Quote } from 'lucide-react-native';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
}

export function Testimonial({ text, author, role }: TestimonialProps) {
  return (
    <View style={styles.container}>
      <View style={styles.quoteIconContainer}>
        <Quote size={20} color={theme.colors.primary} />
      </View>
      <Text style={styles.testimonialText}>{text}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    marginRight: 16,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quoteIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  testimonialText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: theme.colors.text.primary,
    lineHeight: 24,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  author: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: theme.colors.text.primary,
  },
  role: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    marginTop: 4,
  },
});