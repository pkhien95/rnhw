import React, {useLayoutEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParams} from 'navigation/types';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DeeplinkText from 'components/DeeplinkText';
import {useQuery} from '@apollo/client';
import {GET_COUNTRY_QUERY} from 'api/countries';

function CountryScreen(props: NativeStackScreenProps<RootParams, 'Country'>) {
  const {
    navigation,
    route: {
      params: {countryCode},
    },
  } = props;
  const {data, loading, error} = useQuery(GET_COUNTRY_QUERY, {
    variables: {
      code: countryCode,
    },
  });
  const country = data ? data.country : null;

  useLayoutEffect(() => {
    if (country) {
      navigation.setOptions({
        title: country.name,
      });
    }
  }, [navigation, country]);

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
        <Text style={styles.errorText}>Cannot get country details</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.flag}>{country.emoji}</Text>
      <Text style={styles.name}>{country.name}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text>ISO 3116 Code</Text>
          <Text>{country.code}</Text>
        </View>

        <View style={styles.row}>
          <Text>Phone number prefix</Text>
          <Text>{country.phone}</Text>
        </View>

        <View style={styles.row}>
          <Text>Continent</Text>
          <DeeplinkText link={`/continent/${country.continent.code}`}>
            {country.continent.name}
          </DeeplinkText>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  infoContainer: {
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 20,
  },
  flag: {
    fontSize: 60,
    alignSelf: 'center',
  },
  placeholderContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
  },
});

export default CountryScreen;
