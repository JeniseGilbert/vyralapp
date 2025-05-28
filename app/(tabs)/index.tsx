import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from 'expo-router';
import { services } from '@/utils/data';
import { Header } from '@/components/Header';
import { ServiceCard } from '@/components/ServiceCard';
import { theme } from '@/utils/theme';
import { Testimonial } from '@/components/Testimonial';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header title="VYRAL Studios" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInUp.delay(200).duration(700)}>
          <View style={styles.heroContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg' }}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.heroOverlay}>
              <Text style={styles.heroTitle}>VYRAL Studios</Text>
              <Text style={styles.heroSubtitle}>Premium Services for Your Needs</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400).duration(700)}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.servicesList}>
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                onPress={() => navigation.navigate(service.route as never)}
              />
            ))}
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(600).duration(700)}>
          <Text style={styles.sectionTitle}>What Clients Say</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.testimonialContainer}
          >
            <Testimonial 
              text="VYRAL Studios designed amazing merch for our event. Everyone loved it!"
              author="Sarah J."
              role="Event Organizer"
            />
            <Testimonial 
              text="Their DJ services were perfect for our corporate gathering. Very professional."
              author="Michael T."
              role="Marketing Director"
            />
            <Testimonial 
              text="The graphic design work was outstanding and delivered right on schedule."
              author="Jessica L."
              role="Small Business Owner"
            />
          </ScrollView>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(800).duration(700)} style={styles.ctaContainer}>
          <Text style={styles.ctaTitle}>Ready to Work with Us?</Text>
          <Pressable 
            style={styles.ctaButton}
            onPress={() => navigation.navigate('contact' as never)}
          >
            <Text style={styles.ctaButtonText}>Contact Now</Text>
          </Pressable>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  heroContainer: {
    height: 250,
    width: '100%',
    position: 'relative',
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: 'white',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: theme.colors.accent,
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: theme.colors.text.primary,
    marginBottom: 16,
    marginTop: 24,
    paddingHorizontal: 16,
  },
  servicesList: {
    paddingHorizontal: 16,
  },
  testimonialContainer: {
    paddingHorizontal: 16,
    paddingRight: 24,
  },
  ctaContainer: {
    marginTop: 40,
    backgroundColor: theme.colors.primary,
    margin: 16,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  ctaTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: theme.colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: 'white',
  },
});