import { Link } from 'react-router-dom';
import { Container, Profile, Logo, SignOut, Avatar } from './styles';
import { useAuth } from '../../hooks/auth'

import { Input } from '../Input';

export function Header() {

    const { signOut } = useAuth();

    return(
        <Container>
            <Logo>
                <h1>RocketMovies</h1>
            </Logo>
            <Input type="text" placeholder="Pesquisar pelo titulo" />
            <Profile>
                <div>
                    <strong>Fabio Batoni</strong>
                   <SignOut onClick={signOut}>Sair</SignOut>
                </div>
                <Link to="/profile">
                    <Avatar src="https://github.com/fabiobatoni.png" alt="foto github"/>
                </Link>
                
            </Profile>
        </Container>
    )
}