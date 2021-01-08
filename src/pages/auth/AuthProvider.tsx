import React from 'react';
import { Credentions, login as loginApi, restore } from 'src/services/api/sendsay';

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

  React.useEffect(() => {
    restore().then(
      (account) => setUser({ auth: true, user: account, initializing: false }),
    ).catch(
      () => setUser({ auth: false, user: userInfo, initializing: false }),
    );
  }, []);

  const value = React.useMemo(() => ({
    user,
    login: (creds: Credentions) => loginApi(creds).then(
      (account) => setUser(({ initializing }) => ({ auth: true, user: account, initializing })),
    ),
  }),
  [user]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};
