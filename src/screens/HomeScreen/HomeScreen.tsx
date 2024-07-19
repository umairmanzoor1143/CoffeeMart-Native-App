import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
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
import CoffeeCard from '../../components/CoffeeCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
const getCategoriesFromData = (data: any) => {
  let temp: any = { All: 1 };
  data.forEach((ele: ICoffee) => {
    if (!temp[ele.name]) {
      temp[ele.name] = 1;
    }
  });
  let categories = Object.keys(temp);
  return categories;
};

export const HomeScreen = () => {
  const coffeeList: any = useCollectionCoffeeStore().coffeeList;
  const beansList = useCollectionCoffeeStore().beansList;
  const [text, setText] = useState<string>('');
  const [cetagory, setCetagory] = useState<any[]>(getCategoriesFromData(coffeeList));
  const [cetagoryIndex, setCetagoryIndex] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        // showsVerticalScrollIndicator={false}
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CetagoryScrollView}>
          {cetagory.map(ele => {
            return (
              <View key={ele} style={styles.CetagoryContainer}>
                <TouchableOpacity
                  style={styles.CetagoryScrollViewItem}
                  onPress={() => {
                    setCetagoryIndex(ele);
                  }}>
                  <Text
                    style={[
                      styles.CategoryText,
                      cetagoryIndex === ele ? { color: COLORS.primaryOrangeHex } : {},
                    ]}>
                    {ele}
                  </Text>
                  {cetagoryIndex === ele && <View style={styles.ActiveCategory} />}
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={
            cetagoryIndex == 'All'
              ? coffeeList
              : coffeeList?.filter((ele: ICoffee) => cetagoryIndex == ele.name)
          }
          // contentContainerStyle={styles. FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({ item }: any) => {
            return (
              <TouchableOpacity>
                <CoffeeCard data={item} />
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.HeaderTitle}>Beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={
            cetagoryIndex == 'All'
              ? beansList
              : (beansList.filter((ele: any) => cetagoryIndex == ele.name) as any)
          }
          contentContainerStyle={[{ marginBottom: tabBarHeight }]}
          keyExtractor={item => item.id}
          renderItem={({ item }: { item: IBeans }) => {
            return (
              <TouchableOpacity>
                <CoffeeCard data={item} />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
