import { Container, Profile, Logo } from './styles';

import { Input } from '../Input';

export function Header() {
    return(
        <Container>
            <Logo>
                <h1>RocketMovies</h1>
            </Logo>
            <Input type="text" placeholder="Pesquisar pelo titulo" />
            <Profile>
                <div>
                    <strong>Fabio Batoni</strong>
                    <span>sair</span>
                </div>

                <img src="https://github.com/fabiobatoni.png" alt="foto github" />
            </Profile>
        </Container>
    )
}