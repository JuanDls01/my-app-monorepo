// TODO: Enable providers if needed, set a correct name.
export const authStack = new sst.aws.CognitoUserPool('MyUserPool', {
  usernames: ['email'],
});

// GOOGLE PROVIDER

// const GoogleClientId = new sst.Secret("GOOGLE_CLIENT_ID");
// const GoogleClientSecret = new sst.Secret("GOOGLE_CLIENT_SECRET");
// userPool.addIdentityProvider({
//   type: "google",
//   details: {
//     authorize_scopes: "email profile",
//     client_id: GoogleClientId.value,
//     client_secret: GoogleClientSecret.value,
//   },
//   attributes: {
//     email: "email",
//     name: "name",
//     username: "sub",
//   },
// });
