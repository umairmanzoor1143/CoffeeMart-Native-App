import { StyleSheet } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover', // or 'stretch's or 'contain'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '30%', // Adjust the bottom spacing as needed
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    // fontFamily: "sora",
  },
  TextDiscription: {
    color: '#A9A9A9',
  },
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  HeaderContainer: {
    padding: SPACING.space_30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  gradiantBackground: {
    backgroundColor: COLORS.primaryGreyHex,
    padding: 10,
    borderRadius: SPACING.space_12,
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
    padding: SPACING.space_30,
  },
  InputContainer: {
    display: 'flex',
    margin: SPACING.space_30,
    paddingHorizontal: SPACING.space_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: BORDERRADIUS.radius_20,
  },
  inputIcon: {
    marginRight: SPACING.space_20,
  },
  InputStyle: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    height: SPACING.space_20 * 3,
  },
  CetagoryScrollView: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CetagoryContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CetagoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
});
