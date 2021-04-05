import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLFloat,
} from 'graphql';
import axios from 'axios';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLID},
    firstName: {type: GraphQLString},
    payment_date: {type: GraphQLString},
    balance: {type: GraphQLFloat},
    thumbnail: {type: GraphQLString},
    transactions: {
      type: new GraphQLList(TransactionType),
      resolve(parentValue, args) {
        return axios
          .get(
            `http://localhost:3000/users/${parentValue.id}/transactions?_sort=created_at&_order=desc`,
          )
          .then(res => res.data);
      },
    },
  }),
});

const TransactionType = new GraphQLObjectType({
  name: 'Transaction',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    category: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    created_at: {type: GraphQLString},
    thumbnail: {type: GraphQLString},
    user: {
      type: UserType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${parentValue.userId}`)
          .then(res => res.data);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLID}},
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data);
      },
    },
    transaction: {
      type: TransactionType,
      args: {id: {type: GraphQLID}},
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/transactions/${args.id}`)
          .then(resp => resp.data);
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
