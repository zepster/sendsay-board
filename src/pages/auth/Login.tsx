import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'src/components/Button/Button';
import { Card } from 'src/components/Card/Card';
import { Form } from 'src/components/Form/Form';
import { FormItem } from 'src/components/FormItem/FormItem';
import { Input } from 'src/components/Input/Input';
import { Alert } from 'src/components/Notification/Alert';
import { authContext } from './AuthProvider';
import { Container } from './components/Container/Container';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

const initialFormValues = {
  login: '',
  sublogin: '',
  password: '',
};

const isEmail = (value: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const isName = (value: string) => {
  const re = /^[A-Za-z1-9_]*$/;
  return re.test(String(value).toLowerCase());
};

const minLen = (len: number) => (value: string) => value.length >= len;

const isLogin = (value: string) => (
  (minLen(1)(value) && isEmail(value)) || (minLen(8)(value) && isName(value))
);

const validators = {
  login: (value: string) => [isLogin].every((f) => f(value)),
  password: (value: string) => [minLen(8)].every((f) => f(value)),
};

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from }: any = location.state || { from: { pathname: '/' } };

  const { login } = React.useContext(authContext);
  const {
    run, isLoading, isError, error,
  } = useFetch();

  const {
    handleChange,
    values,
    validate,
    errors,
  } = useForm<typeof initialFormValues>(initialFormValues, validators);

  const auth = () => {
    if (!validate()) { return; }
    run(
      () => login(values)
        .then(
          () => history.replace(from),
        ),
    );
  };

  return (
    <Container>
      <Card header="API-консолька">

        {isError && (<Alert text="Вход не вышел" description={error} />)}

        <Form onSubmit={auth}>
          <FormItem id="login" name="login" label="Логин" error={errors.login}>
            <Input value={values.login} onChange={handleChange} />
          </FormItem>

          <FormItem
            id="sublogin"
            name="sublogin"
            label="Сублогин"
            extra="Опционально"
            error={errors.sublogin}
          >
            <Input value={values.sublogin} onChange={handleChange} />
          </FormItem>

          <FormItem label="Пароль" id="password" name="password" error={errors.password}>
            <Input type="password" value={values.password} onChange={handleChange} />
          </FormItem>

          <Button type="submit" loading={isLoading}>Войти</Button>
        </Form>
      </Card>
    </Container>
  );
};
