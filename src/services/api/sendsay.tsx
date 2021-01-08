import Sendsay from 'sendsay-api';

const LOCAL_STORAGE_KEY = 'sendsay-session-key';

const sendsayInstance = new Sendsay();

if (localStorage.getItem('key')) {
  sendsayInstance.setSession(localStorage.getItem(LOCAL_STORAGE_KEY) as string);
}

export interface Credentions {
  login: string;
  password: string;
  sublogin?: string;
}

export interface Account {
  account: string,
  sublogin: string,
}

export const login = (
  credentions: Credentions,
): Promise<Account> => sendsayInstance.login({
  login: credentions.login,
  password: credentions.password,
  sublogin: credentions.sublogin,
}).then(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, sendsayInstance.session);
  return sendsayInstance.request({ action: 'pong' });
}).then(
  (response: any) => ({ account: response.account, sublogin: response.sublogin }),
);
