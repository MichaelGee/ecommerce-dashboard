import { useState, useCallback } from 'react'
import { CenterBox } from 'components/atoms/CenterBox';
import styled from '@emotion/styled'
import { Input } from 'components/atoms/Form/Input';
import { Box } from 'rebass';
import { ButtonTemplate } from 'components/atoms/Button/ButtonTemplate';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './api/auth/firebase';
import { validateEmail, validatePassword } from '../util';
import { useRouter } from 'next/router';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
 text-align: center;
 margin-bottom: 1rem;
`

const Form = styled.form`
  max-width: 30rem;
`

const Error = styled.p`
 font-size: 1.2rem;
 color: red;
 margin: 0.5rem 0;
`

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [signUpError, setSignUpError] = useState<string>("");
  const [emailErrorText, setEmailErrorText] = useState<string>("");
  const [passwordErrorText, setPasswordErrorText] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const router = useRouter();



  // Validate if the input contains data.
  const validateForm = () => {
    if (!email) {
      setEmailErrorText('Please input an email address');
      setEmailError(true);
      return false;
    }
    if (!validateEmail(email)) {
      setEmailErrorText('Please input a valid email address');
      setEmailError(true);

      return false;
    }
    if (!validatePassword(password)) {
      setPasswordErrorText('Password has to be at least 6 characters');
      setPasswordError(true);

      return false;
    }
    if (!password) {
      setPasswordErrorText('Please type a password');
      setPasswordError(true);

      return false;
    }
    return true;
  };



  const onSubmit = useCallback(async e => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/')
      } catch (error) {
        setLoading(false);
        setSignUpError(error.message)
        console.log(error.message);
      }
    }
    // eslint-disable-next-line 
  }, [email, password]);

  return (
    <Container>
      <CenterBox flexDirection="column">
        <Title>LOGIN TO DASHBOARD</Title>
        <Form>
          <Box mb="1rem">
            <Input name="email" type="email" isInvalid={emailError} value={email} handleChange={event => setEmail(event.target.value)} placeholder="Email" appearance="default" autoComplete="on" required />
          </Box>
          {emailErrorText && <Error>{emailErrorText}</Error>}
          <Box mb="1rem">
            <Input name="password" type="password" isInvalid={passwordError} value={password} handleChange={event => setPassword(event.target.value)} placeholder="Password" appearance="default" autoComplete="on" required />
          </Box>
          {passwordErrorText && <Error>{passwordErrorText}</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          <ButtonTemplate loading={loading} onClick={onSubmit} type="submit" appearance="primary" text="Login" size="small" full />
        </Form>
      </CenterBox>
    </Container>
  )
}

export default Login;
