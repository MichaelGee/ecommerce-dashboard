import { useState, useCallback, ChangeEvent, useContext } from 'react'
import styled from '@emotion/styled';
import { CenterBox } from 'components/atoms/CenterBox';
import { Box } from 'rebass';
import { Input } from 'components/atoms/Form/Input';
import { ButtonTemplate } from 'components/atoms/Button/ButtonTemplate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './api/auth/firebase';
import { validateEmail } from '../util';
import { useRouter } from 'next/router'
import { AuthContext } from 'context/AuthContext';

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`
const Title = styled.h1`
 text-align: center;
 margin-bottom: 1rem;
`

const Form = styled.form`
  max-width: 30rem;
  
`

const Signup = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [loginError, setLoginError] = useState('');
    const [user] = useContext(AuthContext);
    const router = useRouter();



    // Validate if the input contains data.
    const validateForm = () => {
        if (!email) {
            setLoginError('Please input an email address');
            return false;
        }
        if (!validateEmail(email)) {
            setLoginError('Please input a valid email address');
            return false;
        }
        if (!password) {
            setLoginError('Please type a password');
            return false;
        }
        return true;
    };
    // On sucessfully signing up and checking if the user state is present, this should happen.
    const onSignupSuccess = () => {
        if (user) {
            return router.push('/')
        }
    }

    // Actions that should occur on submission of the form.
    const handleSubmit = useCallback(async e => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setLoading(true);
                await createUserWithEmailAndPassword(auth, email, password);
                onSignupSuccess();
            } catch (error) {
                setLoading(false);
                console.log(error.message);
            }
        }
        // eslint-disable-next-line 
    }, []);


    // Input handlers to get the data.
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }


    return (
        <Container>
            <CenterBox flexDirection="column">
                <Title>CREATE ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    <Box mb="1rem">
                        <Input type="email" value={email} handleChange={handleChange} placeholder="Email" appearance="default" autoComplete="on" required />
                    </Box>
                    <Box mb="1rem">
                        <Input type="password" value={password} handleChange={handlePassword} placeholder="Password" appearance="default" autoComplete="on" required />
                    </Box>
                    <Box mb="1rem">
                        <Input type="password" value={confirmPassword} handleChange={handleConfirmPassword} placeholder="Retype Password" appearance="default" autoComplete="on" required />
                    </Box>
                    <ButtonTemplate loading={loading} onClick={handleSubmit} appearance="primary" text="Create Account" size="small" full />
                </Form>
            </CenterBox>
        </Container>
    )
}

export default Signup;
