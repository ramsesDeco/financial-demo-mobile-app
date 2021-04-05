# financial-demo-mobile-app

## :books: Intro

App to apply knowledge about

- [react-native](https://reactnative.dev/docs/next/getting-started)
- [graphql](https://graphql.org/)
- [apollo-client](https://www.apollographql.com/docs/react)
- [react-navigation](https://reactnavigation.org/docs/getting-started)
- [react-native-paper](https://callstack.github.io/react-native-paper/index.html)
- and some other UX plugins

this project use the [react-native-template-typescript boilerplate](https://github.com/react-native-community/react-native-template-typescript)

## :arrow_forward: Usage

```sh
yarn start # to run server
yarn ios # to run ios simulator
yarn android # to run android simulator
yarn mock-server # to run local graphql-server
```

## :rainbow: Supporting dark theme

The app supports a custom theme between dark/default or using current device theme

![](https://media.giphy.com/media/DccgyTLsETTpl4VD0o/giphy.gif)

## :shipit: More about mock server

mock server uses

- [json-server](https://github.com/typicode/json-server) to create a restful api
- [express-graphql](https://github.com/graphql/express-graphql) to create a grapql server
- [hackmd.io](https://hackmd.io/070QuZLLQ2qr7SGNtNH7UA) to homologate images urls

in order to access to GraphiQL interface you can go to `http://localhost:4000/graphql` when `yarn mock-server` is runnning and paste this query

```
{
  user(id: 1 ) {
    id
    name
    payment_date
    balance
    thumbnail
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
```

## :computer: Contributing

Contributions, advices or recommendations are very welcome.
