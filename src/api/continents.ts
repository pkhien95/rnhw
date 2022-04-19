import {gql} from '@apollo/client';

export const GET_CONTINENTS_QUERY = gql`
  query GetContinents {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
