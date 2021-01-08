import React, { Dispatch } from 'react';

const userInfo = {
  login: '',
  sublogin: '',
};

const defaultValue = {
  auth: false,
  user: userInfo,
};

export const authContext = React.createContext<{
  user: typeof defaultValue,
  setUser: Dispatch<typeof userInfo>
}>({
  user: defaultValue,
  setUser: () => {},
});
const { Provider } = authContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState(defaultValue);

  const value = React.useMemo(() => ({
    user,
    setUser: (payload: typeof userInfo) => setUser({ auth: true, user: payload }),
  }),
  [user]);

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};
