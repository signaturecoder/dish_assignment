import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'Login',
      Root: {
        screens: {
          CreatePolls: {
            screens: {
              CreatePollsScreen: 'create',
            },
          },
          Votes: {
            screens: {
              VotesScreen: 'votes',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
