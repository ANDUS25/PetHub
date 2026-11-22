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
import Header from '../../Container/Header';
import { useAppSelector } from '../../store/store';
import Colors from '../../utils/color';
import {
  globalAppBlackAndWhiteTheme,
  GlobalAppTheme,
} from '../../utils/CommonUtils';
import { Title } from '../../utils/Strings';
import styles from './Styles';

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
    title: Title.MILESTONE_2002_TITLE,
    description: Title.MILESTONE_2002_DESC,
  },
  {
    year: '2007',
    title: Title.MILESTONE_2007_TITLE,
    description: Title.MILESTONE_2007_DESC,
  },
  {
    year: '2012',
    title: Title.MILESTONE_2012_TITLE,
    description: Title.MILESTONE_2012_DESC,
  },
  {
    year: '2017',
    title: Title.MILESTONE_2017_TITLE,
    description: Title.MILESTONE_2017_DESC,
  },
  {
    year: 'Today',
    title: Title.MILESTONE_TODAY_TITLE,
    description: Title.MILESTONE_TODAY_DESC,
  },
];

const FEATURES: FeatureHighlight[] = [
  {
    icon: (color: string) => <HeartIcon color={color} size={22} />,
    title: Title.FEATURE_VET_TITLE,
    desc: Title.FEATURE_VET_DESC,
  },
  {
    icon: (color) => <SparklesIcon color={color} size={22} />,
    title: Title.FEATURE_CARE_TITLE,
    desc: Title.FEATURE_CARE_DESC,
  },
  {
    icon: (color) => <ChatBubbleLeftRightIcon color={color} size={22} />,
    title: Title.FEATURE_COMMUNITY_TITLE,
    desc: Title.FEATURE_COMMUNITY_DESC,
  },
  {
    icon: (color) => <VideoCameraIcon color={color} size={22} />,
    title: Title.FEATURE_REELS_TITLE,
    desc: Title.FEATURE_REELS_DESC,
  },
];

const WEBSITE_URL = 'https://www.mixo.io/site/pet-hub-nbuoc';

const AboutUs: React.FC = () => {
  const theme = useAppSelector((state) => state.ThemeReducer.value);
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
        Alert.alert(Title.ERROR, Title.UNABLE_TO_OPEN_BROWSER);
      }
    } catch {
      Alert.alert(Title.ERROR, Title.SOMETHING_WENT_WRONG);
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
          borderColor: isDark
            ? Colors.CARD_BORDER_DARK
            : Colors.CARD_BORDER_LIGHT,
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
              <Text style={styles.heroBadgeText}>
                {Title.CONNECTING_PET_LOVERS}
              </Text>
            </View>
            <Text style={[styles.heroTitle, dynamicStyles.primaryText]}>
              {Title.WELCOME_TO}{' '}
              <Text style={styles.brandAccent}>{Title.APP_NAME}</Text>
            </Text>
            <Text style={[styles.heroSubtitle, dynamicStyles.secondaryText]}>
              {Title.ABOUT_HERO_SUBTITLE}
            </Text>
          </View>

          {/* Founder Section */}
          <View style={[styles.card, dynamicStyles.card]}>
            <View style={styles.sectionHeaderRow}>
              <UserCircleIcon color={Colors.lightBlue} size={26} />
              <Text style={[styles.sectionTitle, dynamicStyles.primaryText]}>
                {Title.MEET_THE_FOUNDER}
              </Text>
            </View>
            <Text style={[styles.founderName, dynamicStyles.primaryText]}>
              {Title.FOUNDER_NAME}
            </Text>
            <Text style={styles.founderRole}>{Title.FOUNDER_ROLE}</Text>
            <Text style={[styles.bodyText, dynamicStyles.secondaryText]}>
              {Title.FOUNDER_BIO}
            </Text>
          </View>

          {/* Core Offerings */}
          <View style={styles.featuresSection}>
            <Text style={[styles.sectionHeading, dynamicStyles.primaryText]}>
              {Title.WHAT_PET_HUB_OFFERS}
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
                {Title.OUR_JOURNEY}
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
              {Title.CTA_HEADING}
            </Text>
            <Text style={[styles.ctaSubtitle, dynamicStyles.secondaryText]}>
              {Title.CTA_SUBTITLE}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleOpenWebsite}
              style={styles.ctaButton}
            >
              <Text style={styles.ctaButtonText}>{Title.CTA_BUTTON_TEXT}</Text>
              <ArrowTopRightOnSquareIcon color={Colors.WHITE} size={18} />
            </TouchableOpacity>
          </View>

          {/* Footer Version */}
          <View style={styles.footer}>
            <Text style={[styles.footerText, dynamicStyles.secondaryText]}>
              {Title.VERSION}
            </Text>
            <Text style={[styles.footerText, dynamicStyles.secondaryText]}>
              {Title.COPYRIGHT}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AboutUs;
