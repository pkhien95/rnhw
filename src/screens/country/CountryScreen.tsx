import React, {useLayoutEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParams} from 'navigation/types';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DeeplinkText from "components/DeeplinkText";

function CountryScreen(props: NativeStackScreenProps<RootParams, 'Country'>) {
  const {
    navigation,
    route: {
      params: {country},
    },
  } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: country.name,
    });
  }, [navigation, country]);

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
          <DeeplinkText link={''}>{country.continent.name}</DeeplinkText>
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
});

export default CountryScreen;
