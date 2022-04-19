import {gql} from '@apollo/client';
import {COUNTRY_DISPLAY_FIELDS_FRAGMENT} from 'api/countries';

export const CONTINENT_DISPLAY_FIELDS_FRAGMENT = gql`
  fragment ContinentDisplayFields on Continent {
    code
    name
  }
`;

export const GET_CONTINENT_QUERY = gql`
  query GetContinent($code: ID!) {
    continent(code: $code) {
      ...ContinentDisplayFields
      countries {
        ...CountryDisplayFields
      }
    }
  }
  ${CONTINENT_DISPLAY_FIELDS_FRAGMENT}
  ${COUNTRY_DISPLAY_FIELDS_FRAGMENT}
`;
