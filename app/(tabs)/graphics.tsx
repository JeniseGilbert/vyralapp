import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Header } from '@/components/Header';
import { StatusBar } from 'expo-status-bar';
import { PackageCard } from '@/components/PackageCard';
import { graphicsPackages } from '@/utils/data';
import { theme } from '@/utils/theme';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function GraphicsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header title="Graphics & Printing" />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(700)}>
          <View style={styles.heroContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg' }}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.heroOverlay}>
              <Text style={styles.heroTitle}>Graphics & Printing</Text>
              <Text style={styles.heroSubtitle}>Creative solutions for your brand</Text>
            </View>
          </View>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(300).duration(700)}>
          <Text style={styles.sectionTitle}>Our Packages</Text>
          {graphicsPackages.map((pkg, index) => (
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
          <Text style={styles.sectionTitle}>Portfolio</Text>
          <View style={styles.portfolioGrid}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg' }}
              style={styles.portfolioImage}
              resizeMode="cover"
            />
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg' }}
              style={styles.portfolioImage}
              resizeMode="cover"
            />
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/5611073/pexels-photo-5611073.jpeg' }}
              style={styles.portfolioImage}
              resizeMode="cover"
            />
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg' }}
              style={styles.portfolioImage}
              resizeMode="cover"
            />
          </View>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(500).duration(700)}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.servicesContainer}>
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Logo Design</Text>
              <Text style={styles.serviceDescription}>
                Professional logo design to establish your brand identity
              </Text>
            </View>
            
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Branding</Text>
              <Text style={styles.serviceDescription}>
                Comprehensive branding solutions including style guides
              </Text>
            </View>
            
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Print Materials</Text>
              <Text style={styles.serviceDescription}>
                Business cards, brochures, flyers, posters, and more
              </Text>
            </View>
            
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Digital Graphics</Text>
              <Text style={styles.serviceDescription}>
                Social media graphics, web banners, and digital marketing assets
              </Text>
            </View>
            
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Large Format</Text>
              <Text style={styles.serviceDescription}>
                Banners, signs, trade show displays, and vehicle wraps
              </Text>
            </View>
            
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Packaging</Text>
              <Text style={styles.serviceDescription}>
                Custom packaging design and production
              </Text>
            </View>
          </View>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(600).duration(700)}>
          <Text style={styles.sectionTitle}>Our Process</Text>
          <View style={styles.processList}>
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>1</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processTitle}>Consultation</Text>
                <Text style={styles.processDescription}>
                  We discuss your needs, vision, and goals for your project
                </Text>
              </View>
            </View>
            
            <View style={styles.processConnector} />
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>2</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processTitle}>Concept Development</Text>
                <Text style={styles.processDescription}>
                  Our designers create initial concepts based on your requirements
                </Text>
              </View>
            </View>
            
            <View style={styles.processConnector} />
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>3</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processTitle}>Revisions</Text>
                <Text style={styles.processDescription}>
                  We refine the designs based on your feedback
                </Text>
              </View>
            </View>
            
            <View style={styles.processConnector} />
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>4</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processTitle}>Final Production</Text>
                <Text style={styles.processDescription}>
                  We finalize the design and prepare for production
                </Text>
              </View>
            </View>
            
            <View style={styles.processConnector} />
            
            <View style={styles.processStep}>
              <View style={styles.processNumber}>
                <Text style={styles.processNumberText}>5</Text>
              </View>
              <View style={styles.processContent}>
                <Text style={styles.processTitle}>Delivery</Text>
                <Text style={styles.processDescription}>
                  Your finished products are delivered to your specifications
                </Text>
              </View>
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
  portfolioGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  portfolioImage: {
    width: '48%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  servicesContainer: {
    paddingHorizontal: 16,
  },
  serviceItem: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  serviceTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: theme.colors.text.primary,
    marginBottom: 8,
  },
  serviceDescription: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 22,
  },
  processList: {
    paddingHorizontal: 16,
  },
  processStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  processNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  processNumberText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: 'white',
  },
  processContent: {
    flex: 1,
  },
  processTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: theme.colors.text.primary,
    marginBottom: 4,
  },
  processDescription: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 20,
  },
  processConnector: {
    width: 2,
    height: 24,
    backgroundColor: theme.colors.primary + '40',
    marginLeft: 19, // Half of processNumber width
    marginBottom: 8,
  },
});