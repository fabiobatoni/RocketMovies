import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Form, Avatar} from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

export function Profile() {

    const { user } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </header>

        <Form>

            <Avatar>
                <img src="https://github.com/fabiobatoni.png" alt="Foto do usuario" />

                <label htmlFor="avatar">
                <FiCamera />

                    <input id="avatar" type="file" />
                </label>
            </Avatar>

            

            <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value = {name}
                onChange={e => setName(e.target.value)}
            />

            <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value = {email}
                onChange={e => setEmail(e.target.value)}
            />

            <Input 
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordOld(e.target.value)}
            />

            <Input 
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
            />

            <Button title="Salvar"/>

        </Form>

    </Container>
    )
}