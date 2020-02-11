import { API } from 'aws-amplify';

export const setInitialPlayerDataRequest = async ({ username }) => {
  if (!username) throw new Error('Username not found');
  try {
    const playerData = await API.post('player', '/player', {
      body: {
        username,
        playerDataId: 'FOO',
      },
    });
    return playerData;
  } catch (e) { throw e; }
}

export const updatePlayerDataRequest = async payload => {
  const { playerDataId } = payload;
  try {
    const playerData = API.put('player', `/player/${playerDataId}`, {
      body: payload
    });
    return playerData;
  } catch (e) { throw e; }
};

export const getPlayerDataRequest = async ({ id }) => {
  try {
    const playerData = await API.get('player', `/player/${id}`);
    return playerData;
  } catch (e) { throw e; }
}
