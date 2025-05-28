import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Header } from '@/components/Header';
import { StatusBar } from 'expo-status-bar';
import { PackageCard } from '@/components/PackageCard';
import { merchPackages } from '@/utils/data';
import { theme } from '@/utils/theme';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function MerchScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header title="Merchandise" />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(700)}>
          <View style={styles.heroContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg' }}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.heroOverlay}>
              <Text style={styles.heroTitle}>Custom Merchandise</Text>
              <Text style={styles.heroSubtitle}>Stand out with premium quality</Text>
            </View>
          </View>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(300).duration(700)}>
          <Text style={styles.sectionTitle}>Our Packages</Text>
          {merchPackages.map((pkg, index) => (
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
          <Text style={styles.sectionTitle}>Our Process</Text>
          <View style={styles.processContainer}>
            <View style={styles.processStep}>
              <View style={styles.processStepNumber}>
                <Text style={styles.processStepNumberText}>1</Text>
              </View>
              <Text style={styles.processStepTitle}>Consultation</Text>
              <Text style={styles.processStepDescription}>
                We discuss your vision and requirements for custom merchandise
              </Text>
            </View>
            
            <View style={styles.processStep}>
              <View style={styles.processStepNumber}>
                <Text style={styles.processStepNumberText}>2</Text>
              </View>
              <Text style={styles.processStepTitle}>Design</Text>
              <Text style={styles.processStepDescription}>
                Our designers create concepts based on your ideas
              </Text>
            </View>
            
            <View style={styles.processStep}>
              <View style={styles.processStepNumber}>
                <Text style={styles.processStepNumberText}>3</Text>
              </View>
              <Text style={styles.processStepTitle}>Production</Text>
              <Text style={styles.processStepDescription}>
                Once approved, we produce your merch with premium materials
              </Text>
            </View>
            
            <View style={styles.processStep}>
              <View style={styles.processStepNumber}>
                <Text style={styles.processStepNumberText}>4</Text>
              </View>
              <Text style={styles.processStepTitle}>Delivery</Text>
              <Text style={styles.processStepDescription}>
                Quality checked items delivered to your location
              </Text>
            </View>
          </View>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(500).duration(700)} style={styles.gallerySection}>
          <Text style={styles.sectionTitle}>Gallery</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.galleryContainer}
          >
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/5662862/pexels-photo-5662862.png' }} 
              style={styles.galleryImage} 
            />
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg' }} 
              style={styles.galleryImage} 
            />
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/5699663/pexels-photo-5699663.jpeg' }} 
              style={styles.galleryImage} 
            />
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/6347535/pexels-photo-6347535.jpeg' }} 
              style={styles.galleryImage} 
            />
          </ScrollView>
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
  processContainer: {
    padding: 16,
  },
  processStep: {
    marginBottom: 24,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  processStepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  processStepNumberText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: 'white',
  },
  processStepTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: theme.colors.text.primary,
    marginBottom: 8,
  },
  processStepDescription: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 22,
  },
  gallerySection: {
    marginBottom: 24,
  },
  galleryContainer: {
    paddingHorizontal: 16,
  },
  galleryImage: {
    width: 250,
    height: 180,
    borderRadius: 12,
    marginRight: 12,
  },
});