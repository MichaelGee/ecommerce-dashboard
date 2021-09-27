import { CenterBox } from 'components/atoms/CenterBox';
import styled from '@emotion/styled'
import { Input } from 'components/atoms/Form/Input';
import {Box} from 'rebass';
import { ButtonTemplate } from 'components/atoms/Button/ButtonTemplate';

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

const Login = () => {
    return (
        <Container>
            <CenterBox>
              <Form>
                  <Title>LOGIN TO DASHBOARD</Title>
                  <Box mb="1rem">
                    <Input type="text" placeholder="Email" appearance="default" required/>
                  </Box>
                  <Box mb="1rem">
                    <Input type="password" placeholder="Password" appearance="default" required/>
                  </Box>
                  <ButtonTemplate appearance="primary" text="Login" size="small"  full/>
              </Form>
           </CenterBox> 
        </Container>
    )
}

export default Login;
