import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'src/components/Button/Button';
import { Card } from 'src/components/Card/Card';
import { FormItem } from 'src/components/FormItem/FormItem';
import { Input } from 'src/components/Input/Input';
import { Alert } from 'src/components/Notification/Alert';
import { authContext } from './AuthProvider';
import { Container } from './components/Container/Container';
import { useFetch } from './useFetch';

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from }: any = location.state || { from: { pathname: '/' } };

  const { login } = React.useContext(authContext);
  const {
    run, isLoading, isError, error,
  } = useFetch();

  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');

  const auth = () => run(
    () => login({ login: name, password: pass })
      .then(
        () => history.replace(from),
      ),
  );

  return (
    <Container>
      <Card header="API-консолька">

        {isError && (<Alert text="Вход не вышел" description={error} />)}

        <FormItem id="login" name="login" label="Логин">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormItem>

        <FormItem id="sublogin" name="sublogin" label="Сублогин" extra="Опционально">
          <Input />
        </FormItem>

        <FormItem label="Пароль" id="password" name="password">
          <Input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        </FormItem>

        <Button loading={isLoading} onClick={auth}>Войти</Button>
      </Card>
    </Container>
  );
};
