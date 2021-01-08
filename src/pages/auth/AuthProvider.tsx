import React from 'react';
import { Credentions, login as loginApi } from 'src/services/api/sendsay';

const userInfo = {
  account: '',
  sublogin: '',
};

const defaultValue = {
  auth: false,
  user: userInfo,
};

type Context = {
  user: typeof defaultValue,
  login:(creds: Credentions) => Promise<void>,
};

export const authContext = React.createContext<Context>({
  user: defaultValue,
  login: () => Promise.resolve(),
});
const { Provider } = authContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState(defaultValue);

  const value = React.useMemo(() => ({
    user,
    login: (creds: Credentions) => loginApi(creds).then(
      (account) => setUser({ auth: true, user: account }),
    ),
  }),
  [user]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};
