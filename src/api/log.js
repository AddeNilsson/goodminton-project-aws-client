import { API } from 'aws-amplify';

export const createLogRequest = async (payload) => {
  try {
    const newLog = await API.post('logs', '/logs', {
      body: payload,
    });
    return newLog;
  } catch (e) { throw e; }
}

export const getPlayerLogsRequest = async () => {
  try {
    const logs = await API.get('logs', '/logs');
    return logs;
  } catch (e) { throw e; }
}
