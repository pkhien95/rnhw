import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';
import {Country} from 'api/types';
import CountryItem from 'screens/home/components/CountryItem';
import {useQuery} from '@apollo/client';
import {GET_COUNTRIES_QUERY} from 'api/countries';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParams} from 'navigation/types';

const HomeScreen = (props: NativeStackScreenProps<RootParams, 'Home'>) => {
  const {navigation} = props;
  const {data, loading, refetch} = useQuery(GET_COUNTRIES_QUERY);

  const renderItem = ({item}: ListRenderItemInfo<Country>) => {
    return <CountryItem data={item} onPress={() => onPress(item)} />;
  };

  const keyExtractor = (item: Country) => item.code;

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  if (loading) {
    return (
      <View style={styles.placeholderContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  const onPress = (item: Country) => {
    navigation.navigate('Country', {country: item});
  };

  return (
    <FlatList<Country>
      style={styles.list}
      data={data?.countries}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      initialNumToRender={10}
      ItemSeparatorComponent={itemSeparator}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  itemSeparator: {
    height: 15,
  },
  placeholderContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
