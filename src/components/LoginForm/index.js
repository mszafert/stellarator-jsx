import React from 'react';
import Text from '../Text';
import Input from '../Input';
import Button from '../Button';

function LoginForm () {

    function handleFormSubmit(ev) {
        ev.preventDefault();
        console.log(`Login: ${ev.target.login.value}, Password: ${ev.target.passwd.value}`);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Text heading>Login Form</Text>
            <Input
                placeholder="Login"
                name="login"
            />
            <Input
                placeholder="Password"
                type="password"
                name="passwd"
            />
            <Button>Submit</Button>
        </form>
    );
}

export default LoginForm;
