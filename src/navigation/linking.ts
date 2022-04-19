import {LinkingOptions} from '@react-navigation/native';
import {RootParams} from 'navigation/types';

const linkingOptions: LinkingOptions<RootParams> = {
  prefixes: ['rnhw://'],
  config: {
    screens: {
      Country: 'country/:countryCode',
      Continent: 'continent/:continentCode',
    },
  },
};

export default linkingOptions;
