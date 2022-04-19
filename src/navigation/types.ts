import {Continent, Country} from 'api/types';

export type RootParams = {
  Home: undefined;
  Country: {country: Country};
  Continent: {continent: Continent};
};
