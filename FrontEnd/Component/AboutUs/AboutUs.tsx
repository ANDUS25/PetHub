import React, { useMemo } from 'react';
import {
  Alert,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  HeartIcon,
  SparklesIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import Header from '../../Container/Header';
import Colors from '../../utils/Colors';
import {
  globalAppBlackAndWhiteTheme,
  GlobalAppTheme,
} from '../../utils/CommonUtils';
import { Title } from '../../utils/Strings';
import styles from './Styles';

interface RootState {
  ThemeReducer: {
    value: string;
  };
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface FeatureHighlight {
  icon: (color: string) => React.ReactNode;
  title: string;
  desc: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '2002',
    title: 'The Inception',
    description: 'Conceived from a deep passion for animal care and welfare.',
  },
  {
    year: '2007',
    title: 'Operations Began',
    description: 'Ground operations launched to support local pet parents.',
  },
  {
    year: '2012',
    title: 'Digital Platform',
    description: 'Expanded into online services and remote veterinary support.',
  },
  {
    year: '2017',
    title: 'First Funding',
    description: 'Secured seed investment to scale pet-care solutions.',
  },
  {
    year: 'Today',
    title: 'Social & Smart App',
    description:
      'Mobile community connecting pet lovers, reels, and certified care.',
  },
];

const FEATURES: FeatureHighlight[] = [
  {
    icon: (color: string) => <HeartIcon color={color} size={22} />,
    title: 'Veterinary Advice',
    desc: 'Expert care and verified on-site visits.',
  },
  {
    icon: color => <SparklesIcon color={color} size={22} />,
    title: 'Pet Care & Farms',
    desc: 'Nearby day care and boarding solutions.',
  },
  {
    icon: color => <ChatBubbleLeftRightIcon color={color} size={22} />,
    title: 'Pet Community',
    desc: 'Engage socially with fellow pet owners.',
  },
  {
    icon: color => <VideoCameraIcon color={color} size={22} />,
    title: 'Reels & Media',
    desc: 'Share reels, photos, and joyful moments.',
  },
];

const WEBSITE_URL = 'https://www.mixo.io/site/pet-hub-nbuoc';

const AboutUs: React.FC = () => {
  const theme = useSelector((state: RootState) => state.ThemeReducer.value);
  const isDark = theme !== 'light';

  const handleOpenWebsite = async () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(Title.REDIRECTING_TO_BROWSER, ToastAndroid.SHORT);
    }

    try {
      const canOpen = await Linking.canOpenURL(WEBSITE_URL);
      if (canOpen) {
        await Linking.openURL(WEBSITE_URL);
      } else {
        Alert.alert('Error', 'Unable to open browser on this device.');
      }
    } catch {
      Alert.alert('Error', 'Something went wrong while opening the link.');
    }
  };

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        screen: {
          flex: 1,
          backgroundColor: GlobalAppTheme(theme),
        },
        card: {
          backgroundColor: isDark ? Colors.CARD_BG_DARK : Colors.CARD_BG_LIGHT,
          borderColor: isDark ? Colors.CARD_BORDER_DARK : Colors.CARD_BORDER_LIGHT,
          borderWidth: 1,
        },
        primaryText: {
          color: globalAppBlackAndWhiteTheme(theme),
        },
        secondaryText: {
          color: isDark ? Colors.TEXT_MUTED_DARK : Colors.TEXT_MUTED_LIGHT,
        },
      }),
    [theme, isDark],
  );

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={GlobalAppTheme(theme)}
      />

      <ScrollView
        style={dynamicStyles.screen}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header back={true} header={Title.ABOUT_US} Drawer={true} />

        <View style={styles.container}>
          {/* Hero Banner */}
          <View style={[styles.heroCard, dynamicStyles.card]}>
            <View style={styles.heroBadge}>
              <SparklesIcon color={Colors.lightBlue} size={18} />
              <Text style={styles.heroBadgeText}>Connecting Pet Lovers</Text>
            </View>
            <Text style={[styles.heroTitle, dynamicStyles.primaryText]}>
              Welcome to <Text style={styles.brandAccent}>PetHub</Text>
            </Text>
            <Text style={[styles.heroSubtitle, dynamicStyles.secondaryText]}>
              A comprehensive pet-care and social ecosystem designed to solve
              everyday challenges for pet parents and caregivers worldwide.
            </Text>
          </View>

          {/* Founder Section */}
          <View style={[styles.card, dynamicStyles.card]}>
            <View style={styles.sectionHeaderRow}>
              <UserCircleIcon color={Colors.lightBlue} size={26} />
              <Text style={[styles.sectionTitle, dynamicStyles.primaryText]}>
                Meet the Founder
              </Text>
            </View>
            <Text style={[styles.founderName, dynamicStyles.primaryText]}>
              Mr. Saajan Gangawane
            </Text>
            <Text style={styles.founderRole}>Founder & CEO, PetHub</Text>
            <Text style={[styles.bodyText, dynamicStyles.secondaryText]}>
              An avid animal lover who grew up caring for pets from childhood.
              Understanding the real-world obstacles pet parents face—from busy
              work schedules and finding reliable vets to quality day care—he
              envisioned PetHub as a unified home for pet care and
              companionship.
            </Text>
          </View>

          {/* Core Offerings */}
          <View style={styles.featuresSection}>
            <Text style={[styles.sectionHeading, dynamicStyles.primaryText]}>
              What PetHub Offers
            </Text>
            <View style={styles.featureGrid}>
              {FEATURES.map((item, index) => (
                <View
                  key={index}
                  style={[styles.featureCard, dynamicStyles.card]}
                >
                  <View style={styles.featureIconContainer}>
                    {item.icon(Colors.lightBlue)}
                  </View>
                  <Text
                    style={[styles.featureTitle, dynamicStyles.primaryText]}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={[styles.featureDesc, dynamicStyles.secondaryText]}
                  >
                    {item.desc}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Journey & Milestones */}
          <View style={[styles.card, dynamicStyles.card]}>
            <View style={styles.sectionHeaderRow}>
              <CalendarDaysIcon color={Colors.lightBlue} size={24} />
              <Text style={[styles.sectionTitle, dynamicStyles.primaryText]}>
                Our Journey
              </Text>
            </View>
            <View style={styles.timelineContainer}>
              {MILESTONES.map((milestone, idx) => (
                <View key={idx} style={styles.timelineItem}>
                  <View style={styles.timelineLeft}>
                    <View style={styles.timelineDot} />
                    {idx < MILESTONES.length - 1 && (
                      <View style={styles.timelineLine} />
                    )}
                  </View>
                  <View style={styles.timelineContent}>
                    <View style={styles.timelineYearBadge}>
                      <Text style={styles.timelineYearText}>
                        {milestone.year}
                      </Text>
                    </View>
                    <Text
                      style={[styles.timelineTitle, dynamicStyles.primaryText]}
                    >
                      {milestone.title}
                    </Text>
                    <Text
                      style={[styles.timelineDesc, dynamicStyles.secondaryText]}
                    >
                      {milestone.description}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Company & CTA Section */}
          <View style={[styles.ctaCard, dynamicStyles.card]}>
            <GlobeAltIcon color={Colors.lightBlue} size={32} />
            <Text style={[styles.ctaHeading, dynamicStyles.primaryText]}>
              An ITPC Product
            </Text>
            <Text style={[styles.ctaSubtitle, dynamicStyles.secondaryText]}>
              PetHub is proud to be built and maintained by IT Pro Consult.
              Explore our official website for announcements, updates, and
              partnerships.
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleOpenWebsite}
              style={styles.ctaButton}
            >
              <Text style={styles.ctaButtonText}>Visit IT Pro Consult</Text>
              <ArrowTopRightOnSquareIcon color={Colors.WHITE} size={18} />
            </TouchableOpacity>
          </View>

          {/* Footer Version */}
          <View style={styles.footer}>
            <Text style={[styles.footerText, dynamicStyles.secondaryText]}>
              PetHub • Version 1.0.0
            </Text>
            <Text style={[styles.footerText, dynamicStyles.secondaryText]}>
              © 2026 IT Pro Consult. All rights reserved.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AboutUs;
