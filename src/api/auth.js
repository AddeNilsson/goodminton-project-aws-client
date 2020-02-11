import { Auth } from 'aws-amplify';
import { setInitialPlayerDataRequest } from './player';

export const loginUserRequest = async (payload) => {
  const { username, password } = payload;
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (e) { throw e; }
};

export const getCurrentUserRequest = async (payload) => {
  try {
    // const user = await Auth.currentSession(); Retrieves user Session tokens..
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (e) { throw e; }
};

export const signOutUserRequest = async () => {
  try {
    await Auth.signOut();
    return;
  } catch (e) { throw e; }
};

export const signUpUserRequest = async (payload) => {
  const { email, password } = payload
  try {
    const user = await Auth.signUp({
      username: email,
      password
    });
    return user;
  } catch (e) { throw e; }
};

export const confirmSignUpRequest = async (payload) => {
  const { email, confirmationCode } = payload;
  try {
    await Auth.confirmSignUp(email, confirmationCode);
    return;
  } catch (e) { throw e; }
};

export const initialLoginRequest = async payload => {
  const { password, email, username  } = payload;
  try {
    const user = await loginUserRequest({ username: email, password });
    await setInitialPlayerDataRequest({ username });
    return user;
  } catch (e) { throw e; }
}
