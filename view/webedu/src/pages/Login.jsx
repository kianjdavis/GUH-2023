import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../components/TextField';
import FormButton from '../components/FormButton';
import { publicRequest } from '../middleware'

const FormContainer = styled.main`
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .error {
        margin: 15px;
        width: 100%;
        color: #ff6347;
    }
`;

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const jsonData = JSON.stringify({username, password});
        try {
            const res = await publicRequest.post("/login", jsonData, {
                headers: { 'Content-Type': 'application/json'}
            })
            console.log('Response:', res)
        
            if (res.status !== 200)
                throw new Error('Network response was not ok');
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Error during login. Please try again later.');
        }         
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <TextField
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormButton>Log In</FormButton>
                <StyledLink href="/register">Sign up</StyledLink>
                <StyledLink href="/forgot_password">Forgot your password?</StyledLink>
            </form>
        </FormContainer>
    );
};

const StyledLink = styled.a`
    margin: 0 0 0 10px;
    float: right;
    line-height: 21px;
`;

export default LoginForm;