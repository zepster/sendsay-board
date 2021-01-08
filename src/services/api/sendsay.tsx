import Sendsay from 'sendsay-api';

const LOCAL_STORAGE_KEY = 'sendsay-session-key';

const sendsayInstance = new Sendsay();

if (localStorage.getItem('key')) {
  sendsayInstance.setSession(localStorage.getItem(LOCAL_STORAGE_KEY) as string);
}

export const login = (
  credentions: { login: string, password: string, sublogin?: string },
) => sendsayInstance.login({
  login: credentions.login,
  password: credentions.password,
  sublogin: credentions.sublogin,
}).then(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, sendsayInstance.session);
  return sendsayInstance.request({ action: 'pong' });
}).then(
  (response: any) => ({ login: response.account, sublogin: response.sublogin }),
);
