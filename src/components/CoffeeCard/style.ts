import { StyleSheet } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import { Dimensions } from 'react-native';
const CARD_WIDTH = Dimensions.get('window').width * 0.32;
export const styles = StyleSheet.create({
  CoffeeCard: {
    backgroundColor: COLORS.secondaryBlackRGBA,
    color: '#fff',
    margin: SPACING.space_8,
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.space_8,
    padding: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CoffeeCardImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    overflow: 'hidden',
    marginBottom: SPACING.space_10,
  },
  CoffeeName: {
    color: COLORS.primaryWhiteHex,
  },
  CardBottomDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardPlusButton: {},
  ButtonHolder: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: BORDERRADIUS.radius_10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
});
