import { Link } from 'react-router-dom';
import { Container, Profile, Logo, SignOut, Avatar } from './styles';
import { useAuth } from '../../hooks/auth'
import  { api } from "../../service/api"
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { Input } from '../Input';

export function Header({ ...props }) {

    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    return(
        <Container>
            <Logo>
                <h1>RocketMovies</h1>
            </Logo>
            <Input type="text" placeholder="Pesquisar pelo titulo" {...props}/>
            <Profile>
                <div>
                    <strong>{user.name}</strong>
                   <SignOut onClick={signOut}>Sair</SignOut>
                </div>
                <Link to="/profile">
                    <Avatar src={avatarUrl} alt={user.name}/>
                </Link>
                
            </Profile>
        </Container>
    )
}