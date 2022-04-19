import {gql} from '@apollo/client';

export const COUNTRY_DISPLAY_FIELDS_FRAGMENT = gql`
  fragment CountryDisplayFields on Country {
    code
    name
    phone
    emoji
    capital
  }
`;

export const GET_COUNTRIES_QUERY = gql`
  query GetCountries {
    countries {
      ...CountryDisplayFields
      continent {
        code
        name
      }
    }
  }
  ${COUNTRY_DISPLAY_FIELDS_FRAGMENT}
`;
