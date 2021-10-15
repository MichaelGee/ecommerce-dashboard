import { useState, useCallback, useEffect } from 'react'
import styled from '@emotion/styled';
import { CenterBox } from 'components/atoms/CenterBox';
import { Box } from 'rebass';
import { Input } from 'components/atoms/Form/Input';
import { ButtonTemplate } from 'components/atoms/Button/ButtonTemplate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './api/auth/firebase';
import { validateEmail, validatePassword } from '../util';
import { useRouter } from 'next/router'



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




const Signup = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [signUpError, setSignUpError] = useState<string>("");
    const [emailErrorText, setEmailErrorText] = useState<string>("");
    const [passwordErrorText, setPasswordErrorText] = useState<string>("");
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [confirmPasssword, setConfirmPasssword] = useState<string>("");
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState<string>("");
    const [confirmError, setConfirmError] = useState<boolean>(false);
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
        if (password !== confirmPasssword) {
            setConfirmPasswordErrorText('Passwords dont match');
            setConfirmError(true);

            return false;
        }
        return true;
    };



    const onSubmit = useCallback(async e => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setLoading(true);
                //Create a user account
                const { user } =  await createUserWithEmailAndPassword(auth, email, password);
                 router.push('/')
            } catch (error) {
                setLoading(false);
                setSignUpError(error.message)
                console.log(error.message);
            }
        }
        // eslint-disable-next-line 
    }, [email, password, confirmPasssword]);

    // useEffect(() => {
    //     //Create a user db on firestore with the users unique ID
    //     (async () => {
    //         await setDoc(doc(db, "users", `${userInfo?.uid}`), {
    //                 email: userInfo.email,
    //                 uid: userInfo.uid
    //              });   

    //     })()
    // }, [userInfo])


    return (
        <Container>
            <CenterBox flexDirection="column">
                <Title>CREATE ACCOUNT</Title>
                <Form>
                    <Box mb="1rem">
                        <Input name="email" type="email" isInvalid={emailError} value={email} handleChange={event => setEmail(event.target.value)} placeholder="Email" appearance="default" autoComplete="on" required />
                    </Box>
                    {emailErrorText && <Error>{emailErrorText}</Error>}
                    <Box mb="1rem">
                        <Input name="password" type="password" isInvalid={passwordError} value={password} handleChange={event => setPassword(event.target.value)} placeholder="Password" appearance="default" autoComplete="on" required />
                    </Box>
                    <Box mb="1rem">
                        <Input name="retry-password" type="password" isInvalid={confirmError} value={confirmPasssword} handleChange={event => setConfirmPasssword(event.target.value)} placeholder="Confirm Password" appearance="default" autoComplete="on" required />
                    </Box>
                    {confirmPasswordErrorText && <Error>{confirmPasswordErrorText}</Error>}
                    {passwordErrorText && <Error>{passwordErrorText}</Error>}
                    {signUpError && <Error>{signUpError}</Error>}
                    <ButtonTemplate loading={loading} onClick={onSubmit} type="submit" appearance="primary" text="Create Account" size="small" full />
                </Form>
            </CenterBox>
        </Container>
    )
}

export default Signup;
