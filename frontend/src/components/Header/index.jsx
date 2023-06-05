import { Container, Profile, Logo, SignOut } from './styles';
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

                <img src="https://github.com/fabiobatoni.png" alt="foto github" />
            </Profile>
        </Container>
    )
}