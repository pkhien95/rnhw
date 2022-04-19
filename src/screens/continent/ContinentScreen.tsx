import React, {useLayoutEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParams} from 'navigation/types';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_CONTINENT_QUERY} from 'api/continents';
import {Country} from 'api/types';
import CountryItem from 'screens/continent/components/CountryItem';

function ContinentScreen(
  props: NativeStackScreenProps<RootParams, 'Continent'>,
) {
  const {
    navigation,
    route: {
      params: {continentCode},
    },
  } = props;
  const {data, loading, error} = useQuery(GET_CONTINENT_QUERY, {
    variables: {
      code: continentCode,
    },
  });
  const continent = data ? data.continent : null;

  useLayoutEffect(() => {
    if (continent) {
      navigation.setOptions({
        title: continent.name,
      });
    }
  }, [navigation, continent]);

  if (loading) {
    return (
      <View style={styles.placeholderContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.placeholderContainer}>
        <Text style={styles.errorText}>Cannot get continent details</Text>
      </View>
    );
  }

  const renderItem = ({item}: ListRenderItemInfo<Country>) => {
    return (
      <CountryItem
        data={item}
        onPress={() => navigation.navigate('Country', {countryCode: item.code})}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Code</Text>
        <Text>{continent?.code}</Text>
      </View>
      <Text style={styles.label}>Countries</Text>
      <FlatList<Country>
        data={continent?.countries}
        renderItem={renderItem}
        numColumns={3}
        columnWrapperStyle={styles.countryListColumn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
  },
  countryListColumn: {
    marginBottom: 15,
  },
});

export default ContinentScreen;
