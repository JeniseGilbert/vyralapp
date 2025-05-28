import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { Header } from '@/components/Header';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/utils/theme';
import { Check } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSubmit = () => {
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };
  
  const services = [
    { id: 'merch', label: 'Merchandise' },
    { id: 'tech', label: 'Tech Help' },
    { id: 'graphics', label: 'Graphics & Printing' },
    { id: 'dj', label: 'DJ Services' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header title="Contact Us" />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeInDown.delay(200).duration(700)}>
          <Text style={styles.title}>Get In Touch</Text>
          <Text style={styles.subtitle}>
            Fill out the form below and we'll get back to you as soon as possible.
          </Text>
        </Animated.View>
        
        {submitted ? (
          <Animated.View entering={FadeInDown.duration(700)} style={styles.successContainer}>
            <View style={styles.successIconContainer}>
              <Check size={40} color="white" />
            </View>
            <Text style={styles.successTitle}>Message Sent!</Text>
            <Text style={styles.successMessage}>
              Thank you for contacting VYRAL Studios. We'll respond to your inquiry shortly.
            </Text>
          </Animated.View>
        ) : (
          <Animated.View entering={FadeInDown.delay(300).duration(700)}>
            <View style={styles.formContainer}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Your Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor={theme.colors.text.placeholder}
                  value={formData.name}
                  onChangeText={(text) => handleChange('name', text)}
                />
              </View>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email address"
                  placeholderTextColor={theme.colors.text.placeholder}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.email}
                  onChangeText={(text) => handleChange('email', text)}
                />
              </View>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your phone number"
                  placeholderTextColor={theme.colors.text.placeholder}
                  keyboardType="phone-pad"
                  value={formData.phone}
                  onChangeText={(text) => handleChange('phone', text)}
                />
              </View>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>Service Interested In</Text>
                <View style={styles.serviceOptions}>
                  {services.map((service) => (
                    <Pressable
                      key={service.id}
                      style={[
                        styles.serviceOption,
                        formData.service === service.id && styles.serviceOptionSelected
                      ]}
                      onPress={() => handleChange('service', service.id)}
                    >
                      <Text 
                        style={[
                          styles.serviceOptionText,
                          formData.service === service.id && styles.serviceOptionTextSelected
                        ]}
                      >
                        {service.label}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
              
              <View style={styles.formGroup}>
                <Text style={styles.label}>Message</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Tell us about your project or inquiry"
                  placeholderTextColor={theme.colors.text.placeholder}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  value={formData.message}
                  onChangeText={(text) => handleChange('message', text)}
                />
              </View>
              
              <Pressable 
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Send Message</Text>
              </Pressable>
            </View>
          </Animated.View>
        )}
        
        <Animated.View entering={FadeInDown.delay(400).duration(700)}>
          <View style={styles.contactInfo}>
            <Text style={styles.contactInfoTitle}>Or Reach Us Directly</Text>
            
            <View style={styles.contactItem}>
              <Text style={styles.contactItemTitle}>Email</Text>
              <Text style={styles.contactItemValue}>contact@vyralstudios.com</Text>
            </View>
            
            <View style={styles.contactItem}>
              <Text style={styles.contactItemTitle}>Phone</Text>
              <Text style={styles.contactItemValue}>(555) 123-4567</Text>
            </View>
            
            <View style={styles.contactItem}>
              <Text style={styles.contactItemTitle}>Address</Text>
              <Text style={styles.contactItemValue}>
                123 Creative Way, Suite 101{'\n'}
                Los Angeles, CA 90210
              </Text>
            </View>
            
            <View style={styles.contactItem}>
              <Text style={styles.contactItemTitle}>Hours</Text>
              <Text style={styles.contactItemValue}>
                Monday - Friday: 9am - 6pm{'\n'}
                Saturday: 10am - 4pm{'\n'}
                Sunday: Closed
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
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: theme.colors.text.primary,
    marginBottom: 8,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: theme.colors.text.secondary,
    marginBottom: 24,
    paddingHorizontal: 16,
    lineHeight: 24,
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: theme.colors.text.primary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.colors.inputBackground,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: theme.colors.text.primary,
  },
  textArea: {
    minHeight: 120,
    paddingTop: 12,
  },
  serviceOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  serviceOption: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: theme.colors.inputBackground,
    marginHorizontal: 4,
    marginBottom: 8,
  },
  serviceOptionSelected: {
    backgroundColor: theme.colors.primary,
  },
  serviceOptionText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: theme.colors.text.secondary,
  },
  serviceOptionTextSelected: {
    color: 'white',
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: 'white',
  },
  contactInfo: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  contactInfoTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: theme.colors.text.primary,
    marginBottom: 20,
  },
  contactItem: {
    marginBottom: 20,
  },
  contactItemTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: theme.colors.primary,
    marginBottom: 4,
  },
  contactItemValue: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 22,
  },
  successContainer: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 12,
    padding: 24,
    marginHorizontal: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  successIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: theme.colors.text.primary,
    marginBottom: 12,
  },
  successMessage: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});