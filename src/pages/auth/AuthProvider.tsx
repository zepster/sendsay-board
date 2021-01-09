import React from 'react';
import {
  Credentions, login as loginApi, restore, logout,
} from 'src/services/api/sendsay';

const userInfo = {
  account: '',
  sublogin: '',
};

const defaultValue = {
  auth: false,
  user: userInfo,
  initializing: true,
};

type Context = {
  account: typeof defaultValue,
  login:(creds: Credentions) => Promise<void>,
  logout: () => Promise<void>,
};

export const authContext = React.createContext<Context>({
  account: defaultValue,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});
const { Provider } = authContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState(defaultValue);

  React.useEffect(() => {
    restore().then(
      (account) => setUser({ auth: true, user: account, initializing: false }),
    ).catch(
      () => setUser({ auth: false, user: userInfo, initializing: false }),
    );
  }, []);

  const value = React.useMemo(() => ({
    account: user,
    login: (creds: Credentions) => loginApi(creds).then(
      (account) => setUser(({ initializing }) => ({ auth: true, user: account, initializing })),
    ),
    logout: () => logout().then(
      () => window.location.reload(),
    ),
  }),
  [user]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};
