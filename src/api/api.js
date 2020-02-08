import { Auth } from 'aws-amplify';

const baseUrl = process.env.REACT_APP_API_HOST;
const storage = window.localStorage;


export const loginUserRequest = async (payload) => {
  const { username, password } = payload;
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (e) { throw e; }
};

export const getCurrentUserRequest = async (payload) => {
  try {
    const user = await Auth.currentSession();
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

/*
export const loginUserRequest = (payload) => {
  return fetch(`${baseUrl}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(res => {
      storage.setItem('token', '');
      return res.json();
    })
    .then(data => {
      return data
    })
    .catch(error => {
      throw (error);
    });
};

export const getInitialData = (token) => {
  return fetch(`${baseUrl}/initialdata`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token,
    },
  })
    .then(res => {
      return res.json();
    })
    .catch(error => {
      throw (error);
    });
};
*/
