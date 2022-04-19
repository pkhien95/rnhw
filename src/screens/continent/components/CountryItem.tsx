import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Country} from 'api/types';

type CountryItemProps = Omit<TouchableOpacityProps, 'children'> & {
  data: Country;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function CountryItem(props: CountryItemProps) {
  const {data, ...rest} = props;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.flag}>{data.emoji}</Text>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 3,
    width: (SCREEN_WIDTH - 15 * 4) / 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    fontSize: 30,
  },
});

export default CountryItem;
