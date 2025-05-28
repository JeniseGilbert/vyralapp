import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Header } from '@/components/Header';
import { StatusBar } from 'expo-status-bar';
import { PackageCard } from '@/components/PackageCard';
import { techPackages } from '@/utils/data';
import { theme } from '@/utils/theme';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function TechScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header title="Tech Help" />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(700)}>
          <View style={styles.heroContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg' }}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.heroOverlay}>
              <Text style={styles.heroTitle}>Technical Solutions</Text>
              <Text style={styles.heroSubtitle}>Expert tech support</Text>
            </View>
          </View>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(300).duration(700)}>
          <Text style={styles.sectionTitle}>Our Packages</Text>
          {techPackages.map((pkg, index) => (
            <PackageCard 
              key={pkg.id}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              index={index}
            />
          ))}
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(400).duration(700)}>
          <Text style={styles.sectionTitle}>Services Offered</Text>
          <View style={styles.servicesGrid}>
            <View style={styles.serviceItem}>
              <View style={styles.serviceIconContainer}>
                <Text style={styles.serviceIcon}>🖥️</Text>
              </View>
              <Text style={styles.serviceTitle}>Computer Repair</Text>
            </View>
            
            <View style={styles.serviceItem}>
              <View style={styles.serviceIconContainer}>
                <Text style={styles.serviceIcon}>📱</Text>
              </View>
              <Text style={styles.serviceTitle}>Mobile Solutions</Text>
            </View>
            
            <View style={styles.serviceItem}>
              <View style={styles.serviceIconContainer}>
                <Text style={styles.serviceIcon}>🔒</Text>
              </View>
              <Text style={styles.serviceTitle}>Data Security</Text>
            </View>
            
            <View style={styles.serviceItem}>
              <View style={styles.serviceIconContainer}>
                <Text style={styles.serviceIcon}>🌐</Text>
              </View>
              <Text style={styles.serviceTitle}>Network Setup</Text>
            </View>
            
            <View style={styles.serviceItem}>
              <View style={styles.serviceIconContainer}>
                <Text style={styles.serviceIcon}>⚙️</Text>
              </View>
              <Text style={styles.serviceTitle}>System Upgrades</Text>
            </View>
            
            <View style={styles.serviceItem}>
              <View style={styles.serviceIconContainer}>
                <Text style={styles.serviceIcon}>📊</Text>
              </View>
              <Text style={styles.serviceTitle}>Business IT</Text>
            </View>
          </View>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(500).duration(700)}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.reasonsContainer}>
            <View style={styles.reasonItem}>
              <Text style={styles.reasonTitle}>Certified Technicians</Text>
              <Text style={styles.reasonDescription}>
                Our team consists of certified professionals with years of experience
              </Text>
            </View>
            
            <View style={styles.reasonItem}>
              <Text style={styles.reasonTitle}>Quick Response</Text>
              <Text style={styles.reasonDescription}>
                We pride ourselves on fast response times and efficient solutions
              </Text>
            </View>
            
            <View style={styles.reasonItem}>
              <Text style={styles.reasonTitle}>Affordable Rates</Text>
              <Text style={styles.reasonDescription}>
                Competitive pricing with transparent quotes, no hidden fees
              </Text>
            </View>
            
            <View style={styles.reasonItem}>
              <Text style={styles.reasonTitle}>Customer Satisfaction</Text>
              <Text style={styles.reasonDescription}>
                Our high customer retention rate speaks to our quality service
              </Text>
            </View>
          </View>
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
    height: 200,
    width: '100%',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
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
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  serviceItem: {
    width: '48%',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceIcon: {
    fontSize: 28,
  },
  serviceTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
  reasonsContainer: {
    paddingHorizontal: 16,
  },
  reasonItem: {
    marginBottom: 20,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 16,
  },
  reasonTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: theme.colors.text.primary,
    marginBottom: 8,
  },
  reasonDescription: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 22,
  },
});