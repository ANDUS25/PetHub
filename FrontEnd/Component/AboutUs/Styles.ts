import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  container: {
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 16,
    padding: 18,
    marginVertical: 8,
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  heroCard: {
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BLUE_TINT,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 12,
  },
  heroBadgeText: {
    fontSize: 12,
    fontFamily: 'Mulish-Bold',
    color: Colors.PRIMARY_BLUE,
    marginLeft: 6,
  },
  heroTitle: {
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  brandAccent: {
    color: Colors.lightBlue,
  },
  heroSubtitle: {
    fontSize: 13,
    fontFamily: 'Mulish-Regular',
    textAlign: 'center',
    lineHeight: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    marginLeft: 8,
  },
  featuresSection: {
    marginVertical: 10,
  },
  sectionHeading: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    marginBottom: 10,
    marginLeft: 4,
  },
  founderName: {
    fontSize: 16,
    fontFamily: 'Mulish-Bold',
  },
  founderRole: {
    fontSize: 13,
    fontFamily: 'Mulish-Medium',
    color: Colors.lightBlue,
    marginTop: 2,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 13,
    fontFamily: 'Mulish-Regular',
    lineHeight: 21,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  featureIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: Colors.BLUE_TINT,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 13,
    fontFamily: 'Mulish-Bold',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 11,
    fontFamily: 'Mulish-Regular',
    lineHeight: 15,
  },
  timelineContainer: {
    marginTop: 6,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineLeft: {
    alignItems: 'center',
    width: 24,
    marginRight: 10,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.lightBlue,
    marginTop: 4,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.BORDER_LINE,
    marginTop: 4,
  },
  timelineContent: {
    flex: 1,
  },
  timelineYearBadge: {
    backgroundColor: Colors.BLUE_TINT,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  timelineYearText: {
    color: Colors.PRIMARY_BLUE,
    fontSize: 11,
    fontFamily: 'Mulish-Bold',
  },
  timelineTitle: {
    fontSize: 13,
    fontFamily: 'Mulish-Bold',
  },
  timelineDesc: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    marginTop: 2,
    lineHeight: 17,
  },
  ctaCard: {
    borderRadius: 16,
    padding: 22,
    alignItems: 'center',
    marginVertical: 10,
  },
  ctaHeading: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    marginTop: 8,
    marginBottom: 6,
  },
  ctaSubtitle: {
    fontSize: 13,
    fontFamily: 'Mulish-Regular',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 16,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY_BLUE,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '100%',
  },
  ctaButtonText: {
    color: Colors.WHITE,
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
    marginRight: 8,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    fontSize: 11,
    fontFamily: 'Mulish-Regular',
    lineHeight: 18,
  },
});

export default styles;
