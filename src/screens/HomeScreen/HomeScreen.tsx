import React, { useEffect, useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Loading } from '../../components/Loading';
import { useCollectionCoffeeStore } from '../../store/stores/collections';
import { getAllCoffees } from '../../api/coffee';
import axios from 'axios';
export const HomeScreen = () => {
  const [text, setText] = useState<string>('');
  const [coffeeData, setCoffeeData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const coffees = axios.get('http://localhost:8080/coffee').then(() => {
          setCoffeeData(coffees as any);
          console.log({ coffees });
        });
      } catch (error) {
        console.error('Error fetching coffees:', error);
      }
    };

    fetchCoffees();
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.HeaderContainer}>
          <View style={styles.gradiantBackground}>
            <Icon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
          </View>
          <View style={styles.ImageContainer}>
            <Image source={require('../../assets/images/app-backgroud.png')} style={styles.Image} />
          </View>
        </View>
        <Text style={styles.HeaderTitle}>Find the best{'\n'}coffee for you</Text>
        <View style={styles.InputContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsLoading(!isLoading);
            }}>
            <AntDesignIcon
              name='search1'
              size={FONTSIZE.size_18}
              color={text.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
              style={styles.inputIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder='Find your coffee...'
            value={text}
            onChangeText={e => setText(e)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.InputStyle}
          />
          {isLoading && (
            <Loading
              color={COLORS.primaryLightGreyHex}
              loadingsStyle={{ padding: SPACING.space_10 }}
            />
          )}
        </View>
        <ScrollView>
          <TouchableOpacity>
            <Text style={{ color: '#fff' }}>{coffeeData}</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
