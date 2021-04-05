import {gql} from '@apollo/client';

export const GET_USER_TRANSACTIONS = gql`
  query GetUserTransactions($id: ID!) {
    user(id: $id) {
      transactions {
        id
        name
        category
        amount
        created_at
        thumbnail
      }
    }
  }
`;
