import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {Country} from 'api/types';

type CountryItemProps = Omit<TouchableOpacityProps, 'children'> & {
  data: Country;
};

function CountryItem(props: CountryItemProps) {
  const {data, style, ...rest} = props;

  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <Text style={styles.flag}>{data.emoji}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.capital}>{data.capital}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  flag: {
    fontSize: 40,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: '600',
    marginBottom: 5,
  },
  capital: {
    color: 'grey',
  },
});

export default CountryItem;
