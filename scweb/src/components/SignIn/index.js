import React from 'react'
import { Container, FormButton, Icon, Form, Text, FormContent, FormH1, FormInput, FormLabel, FormWrap } from './SigninElements'

const SignIn = () => {
    return (
        <Container>
            <FormWrap >
                <Icon to='/'>Webevis</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forget Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn
