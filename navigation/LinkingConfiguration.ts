import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Login: 'Login',
        }
      },
      Main: {
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
