import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Background } from "./styles";

import { MyContext } from '../../myContext';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {

    const data = useContext(MyContext);

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>
            
                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background />
        </Container>
    )
}