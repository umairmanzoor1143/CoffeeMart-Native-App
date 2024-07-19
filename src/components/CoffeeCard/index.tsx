import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS, FONTSIZE } from '../../theme/theme';
import { TouchableOpacity } from 'react-native';

const CoffeeCard = ({ data }: { data: ICoffee | IBeans }) => {
  const { name, special_ingredient, prices, imagelink_square, id, average_rating } = data;
  return (
    <View style={styles.CoffeeCard} key={id}>
      <ImageBackground style={styles.CoffeeCardImage} source={imagelink_square} resizeMode='cover'>
        <View style={styles.CardRatingContainer}>
          <Icon name='star' color={COLORS.primaryOrangeHex} size={FONTSIZE.size_16} />
          <Text style={{ color: COLORS.primaryWhiteHex }}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <View>
        <Text style={styles.CoffeeName}>{name}</Text>
        <Text style={styles.CoffeeName}>{special_ingredient}</Text>
      </View>
      <View style={styles.CardBottomDetails}>
        <Text style={{ color: COLORS.primaryOrangeHex }}>
          $<Text style={{ color: COLORS.primaryWhiteHex }}>{prices[0].price}</Text>
        </Text>
        <TouchableOpacity>
          <View style={styles.ButtonHolder}>
            <Icon name='plus' color={COLORS.primaryWhiteHex} size={FONTSIZE.size_20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeCard;
